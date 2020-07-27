const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const dotenv = require("dotenv").config();


const domain = process.env.DOMAIN_NAME;
const api_key = process.env.API_KEY;

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
    to: 'carlosmoreno.development@gmail.com',
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
