const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.json({
    'message': 'Welcome to Godswill Andrew\'s server!',
  });
});

app.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const emailBody = `
      <!DOCTYPE html>
      <html lang='en'>
      <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>New Contact Form Submission</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: 'Rubik', sans-serif;
            line-height: 1.6;
            color: #333333;
            background-color: #f8fafc;
          }

          .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          }

          .header {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            padding: 32px 24px;
            text-align: center;
            color: white;
          }

          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 700;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          }

          .header p {
            margin: 8px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
          }

          .content {
            padding: 32px 24px;
          }

          .info-section {
            margin-bottom: 32px;
          }

          .info-row {
            display: flex;
            align-items: flex-start;
            margin-bottom: 16px;
            padding: 16px;
            background-color: #f8fafc;
            border-radius: 8px;
            border-left: 4px solid #4f46e5;
          }

          .info-label {
            font-weight: 600;
            color: #4f46e5;
            min-width: 100px;
            margin-right: 16px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .info-value {
            flex: 1;
            font-size: 16px;
            color: #1f2937;
            word-break: break-word;
          }

          .message-section {
            background: linear-gradient(135deg, #f0f9ff 0%, #e0e7ff 100%);
            border-radius: 12px;
            padding: 24px;
            border: 1px solid #e5e7eb;
          }

          .message-header {
            font-size: 18px;
            font-weight: 600;
            color: #1f2937;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
          }

          .message-icon {
            width: 20px;
            height: 20px;
            margin-right: 8px;
            fill: #4f46e5;
          }

          .message-content {
            font-size: 16px;
            line-height: 1.7;
            color: #374151;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            white-space: pre-wrap;
            word-wrap: break-word;
          }

          .footer {
            background-color: #f9fafb;
            padding: 24px;
            text-align: center;
            border-top: 1px solid #e5e7eb;
          }

          .footer p {
            margin: 0;
            font-size: 14px;
            color: #6b7280;
          }

          .timestamp {
            font-size: 12px;
            color: #9ca3af;
            font-style: italic;
          }

          .action-buttons {
            margin-top: 24px;
            text-align: center;
          }

          .btn {
            display: inline-block;
            padding: 12px 24px;
            margin: 0 8px;
            text-decoration: none;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.2s ease;
          }

          .btn-primary {
            background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
            color: white;
          }

          .btn-secondary {
            background-color: #f3f4f6;
            color: #374151;
            border: 1px solid #d1d5db;
          }

          @media (max-width: 600px) {
            .email-container {
              margin: 0;
              border-radius: 0;
            }

            .header, .content, .footer {
              padding-left: 16px;
              padding-right: 16px;
            }

            .info-row {
              flex-direction: column;
            }

            .info-label {
              margin-bottom: 4px;
              margin-right: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class='email-container'>
          <div class='header'>
            <h1>New Contact Form Submission</h1>
            <p>You have received a new message from your portfolio website</p>
          </div>

          <div class='content'>
            <div class='info-section'>
              <div class='info-row'>
                <div class='info-label'>Name</div>
                <div class='info-value'>${name}</div>
              </div>

              <div class='info-row'>
                <div class='info-label'>Email</div>
                <div class='info-value'>
                  <a href='mailto:${email}' style='color: #4f46e5; text-decoration: none;'>${email}</a>
                </div>
              </div>

              <div class='info-row'>
                <div class='info-label'>Subject</div>
                <div class='info-value'>${subject}</div>
              </div>

              <div class='info-row'>
                <div class='info-label'>Received</div>
                <div class='info-value timestamp'>${new Date().toLocaleString()}</div>
              </div>
            </div>

            <div class='message-section'>
              <div class='message-header'>
                <svg class='message-icon' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'/>
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'/>
                </svg>
                Message
              </div>
              <div class='message-content'>${message}</div>
            </div>

            <div class='action-buttons'>
              <a href='mailto:${email}?subject=Re: ${subject}' class='btn btn-primary'>Reply to ${name}</a>
              <a href='mailto:${email}' class='btn btn-secondary'>Send New Email</a>
            </div>
          </div>

          <div class='footer'>
            <p>This message was sent from the contact form on your portfolio website.</p>
            <p style='margin-top: 8px; font-size: 12px;'>
              Please do not reply to this email directly. Use the action buttons above to respond.
            </p>
          </div>
        </div>
      </body>
      </html>
    `;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // Verify the transporter can actually authenticate before trying to send.
    // This makes bad credentials show up clearly in your server logs instead
    // of failing silently.
    await transporter.verify();

    const mailOptions = {
      from: `"${name} via Portfolio" <${process.env.EMAIL_USER}>`, // must be the authenticated address
      replyTo: email,                                              // hitting "reply" goes to the visitor
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact: ${subject}`,
      html: emailBody
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return res.status(500).json({ error: error.message || 'An error occurred while sending the email.' });
  }
});

app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
});