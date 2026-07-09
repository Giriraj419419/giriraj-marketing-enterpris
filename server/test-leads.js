const fs = require('fs');
const path = require('path');
const FormData = require('form-data');
const http = require('http');

async function runTest() {
  console.log('--- STARTING AUTONOMOUS LEAD SUBMISSION TEST ---');
  
  // 1. Create a dummy document to upload
  const dummyFilePath = path.join(__dirname, 'dummy_test_doc.pdf');
  fs.writeFileSync(dummyFilePath, 'Mock PDF Content for Testing');

  // 2. Prepare FormData
  const form = new FormData();
  form.append('fullName', 'John Doe');
  form.append('companyName', 'Acme Enterprise');
  form.append('email', 'john.doe@example.com');
  form.append('phone', '+1-555-019-8372');
  form.append('serviceCategory', 'Microsoft Azure Architecture');
  form.append('budget', '$50,000+');
  form.append('timeline', 'Within 3 months');
  form.append('projectDetails', 'We need a complete server migration to Azure.');
  form.append('documents', fs.createReadStream(dummyFilePath));

  // 3. Send POST request
  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/api/leads',
    method: 'POST',
    headers: form.getHeaders(),
  };

  const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      console.log('--- SERVER RESPONSE ---');
      console.log('Status Code:', res.statusCode);
      try {
        const parsed = JSON.parse(data);
        console.log(JSON.stringify(parsed, null, 2));
        if (parsed.success) {
          console.log('\\n[SUCCESS] Lead ID Generated:', parsed.leadId);
        }
      } catch(e) {
        console.log(data);
      }
      
      // Cleanup
      fs.unlinkSync(dummyFilePath);
      console.log('--- TEST FINISHED ---');
      process.exit(0);
    });
  });

  req.on('error', (e) => {
    console.error(`Problem with request: ${e.message}`);
    process.exit(1);
  });

  form.pipe(req);
}

// Give server time to start
setTimeout(runTest, 3000);
