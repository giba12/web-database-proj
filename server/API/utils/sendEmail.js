import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const sendOnboardingEmail = async (to, username, password) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'Welcome to EDMS!',
      text: `Hello ${username},\n\nYou have been onboarded to EDMS.\nYour temporary password is: ${password}\n\nPlease login and change your password.`,
    };

    await transporter.sendMail(mailOptions);
    console.log(`📨 Email sent to ${to}`);
  } catch (err) {
    console.error('❌ Failed to send email:', err);
  }
};
