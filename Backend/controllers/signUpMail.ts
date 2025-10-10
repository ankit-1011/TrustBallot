// ./mail.js
import nodemailer from "nodemailer";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const imagePath = join(__dirname, "../public/SignUpImage.png");


async function signUpMail(email: any, name: any) {
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
      subject: "Welcome to Trustballot & Happy  Onchain Voting!",
      text: `Hi ${name},\n\nYou had SignUp in to TRUSTBALLOT.`,
      html: `
        <p>Hi ${name},Welcome to TrustBallot 👋</p>
        <p>Your voice just got stronger.</p>
        <p>Thanks for signing up! You’re now part of a secure, transparent, and community-driven voting<br> experience. Whether you're casting a ballot, verifying results, or just exploring, you're helping<br> shape a more accountable future.</p>
        <p>🔐<strong>Your data stays private</strong></p>
        <p>🗳️<strong>Your vote stays verified</strong></p>
        <p>🤝<strong>Your impact stays rea</strong></p>
        <p><img src="cid:logo@example.com" alt="logo"/></p>
      `,

      attachments: [
        {
          filename: "SignUpImage.png",
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

export default signUpMail;
