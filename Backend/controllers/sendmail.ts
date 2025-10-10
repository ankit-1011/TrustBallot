// ./mail.js
import nodemailer from "nodemailer";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagePath = join(__dirname, "../public/mailImage.jpg");


async function sendLoginMail(email: any, name: any) {
  try {

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    const info = await transporter.sendMail({
      from: `"Admin" ${process.env.EMAIL_USER}`,
      to: email,
      subject: "You has Login in  to Trustballot!",
      text: `Hi ${name},\n\nWe noticed a login to your TrustBallot account.\nIf this was you, no action is needed.\nIf not, please reset your password immediately.`,
      html: `
        <p>Hi ${name},</p>
        <p>We noticed a login to your <strong>TrustBallot</strong> account.</p>
        <p>If this was you, no action is needed.</p>
        <p>If not, please <a href="#">reset your password</a> immediately.</p>
        <p>Embedded image: <img src="cid:logo@example.com" alt="logo"/></p>
      `,

      attachments: [
        {
          filename: "mailImage.jpg",
          path: imagePath,
          cid: "logo@example.com",
        },
      ],
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (err) {
    console.error("Error occurred:", err);
  }
}

export default sendLoginMail;
