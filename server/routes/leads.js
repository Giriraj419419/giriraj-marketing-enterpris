const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const emailService = require('../services/emailService');
const sheetsService = require('../services/sheetsService');

const leadRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '-' + file.originalname.replace(/\\s+/g, '_'))
  }
});
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
});

// Simple in-memory duplicate check
const recentSubmissions = new Set();

// Sequential ID Generator
const getNextLeadId = () => {
  const counterFile = path.join(__dirname, '../counter.json');
  let counter = 1;
  if (fs.existsSync(counterFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(counterFile, 'utf8'));
      counter = data.lastId + 1;
    } catch (e) {
      console.error('Error reading counter file', e);
    }
  }
  
  // Save new counter
  fs.writeFileSync(counterFile, JSON.stringify({ lastId: counter }));
  
  // Format as GM-0001
  return `GM-${String(counter).padStart(4, '0')}`;
};

leadRouter.post('/', upload.array('documents', 5), async (req, res) => {
  try {
    const { 
      fullName, 
      companyName, 
      email, 
      phone, 
      serviceCategory, 
      budget, 
      timeline, 
      projectDetails,
      honeypot 
    } = req.body;

    // 1. Spam Prevention (Honeypot)
    if (honeypot) {
      return res.status(400).json({ error: 'Spam detected' });
    }

    // 2. Validation
    console.log('--- RECEIVED LEAD PAYLOAD ---');
    console.log(JSON.stringify(req.body, null, 2));
    console.log('--- EXPECTED REQUIRED FIELDS ---');
    console.log('fullName, email, phone, serviceCategory');
    
    const missingFields = [];
    if (!fullName) missingFields.push('fullName');
    if (!email) missingFields.push('email');
    if (!phone) missingFields.push('phone');
    if (!serviceCategory) missingFields.push('serviceCategory');

    if (missingFields.length > 0) {
      console.log('--- MISSING FIELDS ---', missingFields);
      return res.status(400).json({ 
        success: false, 
        error: 'Missing required fields',
        missingFields: missingFields 
      });
    }

    // 3. Duplicate Prevention (Basic)
    const duplicateKey = `${email}-${phone}`;
    if (recentSubmissions.has(duplicateKey)) {
      return res.status(429).json({ error: 'A submission with this email/phone was recently received. Please wait.' });
    }
    recentSubmissions.add(duplicateKey);
    setTimeout(() => recentSubmissions.delete(duplicateKey), 15 * 60 * 1000); // 15 mins

    // 4. Generate Sequential Lead ID
    const leadId = getNextLeadId();

    // 5. Store Document Links
    // In production, these should be hosted on a public URL. Since they are locally hosted, we provide the full URL.
    const baseUrl = req.protocol + '://' + req.get('host');
    const fileLinks = req.files ? req.files.map(f => `${baseUrl}/uploads/${f.filename}`) : [];

    // Map all fields exactly as required by the user
    const leadData = {
      Lead_ID: leadId,
      Date: new Date().toISOString(),
      Name: fullName,
      Company: companyName || '',
      Email: email,
      Phone: phone,
      Service: serviceCategory,
      Budget: budget || '',
      Timeline: timeline || '',
      Status: 'New Lead', // Default status as requested
      Notes: projectDetails || '',
      Documents: fileLinks.join(', ') // Add document links as a comma-separated string for sheets
    };

    // 6. Emails (Internal & Customer)
    const internalLead = { ...req.body, leadId };
    try {
      await emailService.sendInternalLeadNotification(internalLead, fileLinks);
      await emailService.sendLeadConfirmationToClient(internalLead);
    } catch (emailErr) {
      console.error('Email sending failed:', emailErr);
    }

    // 7. Google Sheet Entry
    let sheetsSuccess = true;
    try {
      await sheetsService.addLead(leadData);
    } catch (sheetErr) {
      console.error('Sheet Error:', sheetErr);
      sheetsSuccess = false;
      
      // Fallback: Save to local file so no data is lost
      const backupFile = path.join(__dirname, '../failed_leads.json');
      let failedLeads = [];
      if (fs.existsSync(backupFile)) {
        failedLeads = JSON.parse(fs.readFileSync(backupFile, 'utf8'));
      }
      failedLeads.push(leadData);
      fs.writeFileSync(backupFile, JSON.stringify(failedLeads, null, 2));
    }

    // Success response (even if Sheets failed, as long as we have the local backup and sent the emails, we don't block the user's flow)
    res.status(200).json({ 
      success: true, 
      message: 'Consultation request submitted successfully.',
      leadId: leadId,
      sheetsWarning: !sheetsSuccess ? 'Saved locally due to Sheets API 401 Error' : null
    });

  } catch (error) {
    console.error('Lead Submission Error:', error);
    res.status(500).json({ error: 'Internal server error while processing lead.' });
  }
});

module.exports = leadRouter;
