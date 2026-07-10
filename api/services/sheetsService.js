class SheetsService {
  async addLead(leadData) {
    const appsScriptUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (!appsScriptUrl) {
      console.warn('No GOOGLE_APPS_SCRIPT_URL provided in .env. Skipping Google Sheets integration.');
      return;
    }

    try {
      console.log("SENDING TO GOOGLE SHEETS");
      // The Apps script handles POST requests and parses the body.
      // Usually, Google Apps Script Web Apps prefer application/json or application/x-www-form-urlencoded
      const response = await fetch(appsScriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      // Google Apps script redirects on POST, which fetch follows automatically, 
      // but it's good to just check if it didn't throw an error.
      if (!response.ok) {
        throw new Error(`Google Apps Script responded with status: ${response.status}`);
      }

      const resultText = await response.text();
      console.log("GOOGLE SHEETS SUCCESS");
      console.log('Successfully saved to Google Sheets via Apps Script:', resultText);
    } catch (err) {
      console.error('Failed to append to Google Sheet', err);
      throw err; // We will throw to ensure caller knows it failed
    }
  }
}

module.exports = new SheetsService();
