import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Contact API Route
app.post('/api/contact', async (req, res) => {
  const { name, email, message, services } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Inquiry from ${name} - Danny Castro AI`,
      text: `
        Name: ${name}
        Email: ${email}
        Services: ${Array.isArray(services) ? services.join(', ') : services}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Inquiry from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Services:</strong> ${Array.isArray(services) ? services.join(', ') : services}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Handle SPA routing - send all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
