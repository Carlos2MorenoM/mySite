const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const dotenv = require("dotenv").config();


const domain = process.env.DOMAIN_NAME;
const api_key = process.env.API_KEY;
const gmail_user = process.env.GMAIL_USER;

const auth = {
  auth: {
    api_key: api_key,
    domain: domain
  }
}

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {

  const mailOptions = {
    from: email,
    to: gmail_user,
    subject: subject,
    text: text
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }

  });

};

module.exports = sendMail;
