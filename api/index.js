const dotenv = require('dotenv');
dotenv.config();
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const leadsRouter = require('./routes/leads');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: ['http://localhost:5173', 'https://girirajmktg.com'], // Allow local and prod origins
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting to prevent spam
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // Limit each IP to 10 requests per windowMs
  message: { error: 'Too many requests, please try again later.' }
});

app.use('/api/leads', apiLimiter, leadsRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Giriraj Lead Management Server Running on Vercel' });
});

// Export for Vercel Serverless
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
