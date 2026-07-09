const { Resend } = require('resend');
require('dotenv').config();

const resend = new Resend(process.env.RESEND_API_KEY);

const run = async () => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'delivered@resend.dev',
      subject: 'Hello World',
      html: '<strong>It works!</strong>',
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
run();
