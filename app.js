const express = require("express");
const sendMail = require('./mail')
const nodemailer = require("nodemailer");
const request = require("request");

const app = express();
const path = require('path');
const https = require("https");

app.use(express.static("public"));


//Data parsing
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());



app.post('/send', (req, res) => {

  //Send email here
  const { subject, email, text} = req.body;
  console.log('Data: ', req.body);

  sendMail(email, subject, text, function(err, data){
    if (err) {
      console.log('ERROR: ', err);
            return res.status(500).json({ message: err.message || 'Internal Error' });
    }

    console.log('Email sent!!!');
    // return res.redirect('/sucess')
    return res.json({ message: 'Email sent!!!!!' });

  });
});


// Website Pages
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, 'views', '/index.html'));
});

app.get("/contacto.html", function(req, res){
  res.sendFile(path.join(__dirname, 'views', '/contacto.html'));
});







//Port
app.listen(3000, function(err) {
  if (err) {
    console.log(err);
  } else {
      console.log("Server is running on port 3000");
    }
});
