import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, message, services } = req.body;

    try {
      if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
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
            Services: ${services.join(", ")}
            Message: ${message}
          `,
          html: `
            <h3>New Inquiry</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Services:</strong> ${services.join(", ")}</p>
            <p><strong>Message:</strong> ${message}</p>
          `,
        });
      }

      res.status(200).json({ message: "Success" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to process request" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
