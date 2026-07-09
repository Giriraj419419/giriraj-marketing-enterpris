const { Resend } = require('resend');

class EmailService {
  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendLeadConfirmationToClient(lead) {
    try {
      const { data, error } = await this.resend.emails.send({
        from: 'Giriraj Marketing <no-reply@girirajmktg.com>',
        to: lead.email,
        subject: 'Thank You for Contacting Giriraj Marketing',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
            <p>Hello ${lead.fullName},</p>
            <p>Thank you for contacting Giriraj Marketing.</p>
            <p>We have successfully received your inquiry (Lead ID: <strong>${lead.leadId}</strong>) and our team is currently reviewing your requirements.</p>
            <p>Our experts will contact you shortly to discuss the next steps and provide the best solution for your business needs.</p>
            <p>We appreciate the opportunity to work with you.</p>
            <br />
            <p>
              Warm Regards,<br />
              <strong>Giriraj Marketing Team</strong><br />
              Website: <a href="https://www.girirajmktg.com">www.girirajmktg.com</a><br />
              Phone: +91 70482 14373
            </p>
          </div>
        `
      });

      if (error) {
        throw error;
      }

      console.log(`Client Confirmation Email sent: ${data?.id}`);
      return data;
    } catch (error) {
      console.error('Failed to send Client Confirmation Email:', error);
      throw error;
    }
  }

  async sendInternalLeadNotification(lead, fileLinks) {
    try {
      const { data, error } = await this.resend.emails.send({
        from: 'Giriraj System <system@girirajmktg.com>',
        to: process.env.INTERNAL_SALES_EMAIL || 'umang@kktechsolutions.in',
        subject: '🚀 New Lead Received - Giriraj Website',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2 style="color: #01A982;">New Lead Received</h2>
            <p>A new consultation request has been submitted.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Lead ID:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.leadId}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Lead Name:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.fullName}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Company:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.companyName || 'N/A'}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Email:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.email}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Phone:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.phone}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Service:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.serviceCategory}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Budget:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.budget}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Timeline:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.timeline}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Message/Details:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${lead.projectDetails || 'None'}</td></tr>
              <tr><td style="padding: 10px; border: 1px solid #ddd; background: #f9f9f9;"><strong>Submission Date:</strong></td><td style="padding: 10px; border: 1px solid #ddd;">${new Date().toLocaleString()}</td></tr>
            </table>
            ${fileLinks.length > 0 ? `
              <h3 style="margin-top: 20px;">Uploaded Documents:</h3>
              <ul>
                ${fileLinks.map(link => `<li><a href="${link}">${link}</a></li>`).join('')}
              </ul>
            ` : ''}
            </table>
          </div>
        `
      });

      if (error) {
        throw error;
      }

      console.log(`Internal Notification Email sent: ${data?.id}`);
      return data;
    } catch (error) {
      console.error('Failed to send Internal Notification Email:', error);
      throw error;
    }
  }
}

module.exports = new EmailService();
