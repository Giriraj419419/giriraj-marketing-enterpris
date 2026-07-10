const express = require('express');
const multer = require('multer');
const emailService = require('../services/emailService');
const sheetsService = require('../services/sheetsService');

const leadRouter = express.Router();

// Vercel Serverless MUST use memoryStorage. diskStorage will crash.
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
});

// Simple in-memory duplicate check
const recentSubmissions = new Set();

// Timestamp-based ID Generator for Vercel
const getNextLeadId = () => {
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
  const randomStr = Math.floor(1000 + Math.random() * 9000); // 4 digit random
  return `GM-${dateStr}-${randomStr}`;
};

leadRouter.post('/', upload.array('documents', 5), async (req, res) => {
  try {
    console.log("FORM RECEIVED");
    const { 
      fullName, 
      companyName, 
      email, 
      phone, 
      serviceCategory, 
      projectBudget, 
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

    console.log("VALIDATION PASSED");

    // 3. Duplicate Prevention (Basic)
    const duplicateKey = `${email}-${phone}`;
    if (recentSubmissions.has(duplicateKey)) {
      return res.status(429).json({ error: 'A submission with this email/phone was recently received. Please wait.' });
    }
    recentSubmissions.add(duplicateKey);
    setTimeout(() => recentSubmissions.delete(duplicateKey), 15 * 60 * 1000); // 15 mins

    // 4. Generate Timestamp Lead ID
    const leadId = getNextLeadId();

    // 5. Handle Documents (Memory Buffer)
    // In Vercel serverless, we don't host the files statically. 
    // We attach them to the email directly as buffers, and just note in the sheet that files were attached.
    const hasDocuments = req.files && req.files.length > 0;
    const documentNames = hasDocuments ? req.files.map(f => f.originalname).join(', ') : 'No documents attached';

    // Map all fields exactly as required by the user
    const leadData = {
      Lead_ID: leadId,
      Date: new Date().toISOString(),
      Name: fullName,
      Company: companyName || '',
      Email: email,
      Phone: phone,
      Service: serviceCategory,
      Budget: projectBudget || '',
      Timeline: timeline || '',
      Status: 'New Lead', 
      Notes: projectDetails || '',
      Documents: documentNames
    };

    // 6. Emails (Internal & Customer)
    const internalLead = { ...req.body, leadId };
    
    // Convert memory buffers into attachments for emailService
    const attachments = hasDocuments ? req.files.map(f => ({
      filename: f.originalname,
      content: f.buffer
    })) : [];

    try {
      await emailService.sendInternalLeadNotification(internalLead, attachments);
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
      // Note: In Vercel, we cannot write to a local failed_leads.json file, 
      // so if Sheets fails, the email is the sole reliable backup.
    }

    console.log("LEAD COMPLETED");

    res.status(200).json({ 
      success: true, 
      message: 'Consultation request submitted successfully.',
      leadId: leadId,
      sheetsWarning: !sheetsSuccess ? 'Saved to email backup due to Sheets API Error' : null
    });

  } catch (error) {
    console.error('Lead Submission Error:', error);
    res.status(500).json({ error: 'Internal server error while processing lead.' });
  }
});

module.exports = leadRouter;
