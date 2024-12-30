"use server"
import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});
export async function sendEmail(data) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: "Query from Articul8",
      html:`
      <h2>Contact Form Submission</h2>
      <p><strong>Name :</strong> ${data.Name}</p>
      <p><strong>Email :</strong> ${data.Email}</p>
      <p><strong>Phone No :</strong> ${data.Number}</p>
      <p><strong>Query :</strong> ${data.Description}</p>
      <p><strong>Company :</strong> ${data.Company}</p>
    `,
    };
    const result = await transporter.sendMail(mailOptions);
    // console.log('Email sent:', result.response);
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
}
