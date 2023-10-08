const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware for parsing JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static('public'));

// Define a route to handle form submissions
app.post('/submit-form', (req, res) => {
  // Get form data from the request
  const { name, email, message } = req.body;

  // Create a nodemailer transporter to send email (you'll need to configure this)
  const transporter = nodemailer.createTransport({
    service: 'your-email-service-provider',
    auth: {
      user: 'your-email@example.com',
      pass: 'your-email-password',
    },
  });

  // Email content
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
console.log('Client-side JavaScript file loaded.');
