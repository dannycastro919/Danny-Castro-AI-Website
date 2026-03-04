const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Route for Contact Form
app.post('/api/contact', async (req, res) => {
  const { name, email, message, services } = req.body;

  try {
    // Send Email
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Danny Castro AI Website" <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
        subject: `New Inquiry from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Services: ${services.join(', ')}
          Message: ${message}
        `,
        html: `
          <h3>New Inquiry</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Services:</strong> ${services.join(', ')}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
    }

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle SPA routing - send all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
