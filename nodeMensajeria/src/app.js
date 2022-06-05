//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const configMensaje = require('./configMensaje');

// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*"}));
app.use(bodyParser.json());

//start application server on port 3000
app.listen(3000, () => {
  console.log('Servidor corriendo')
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;

  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
  // configMensaje(req.body);
  // res.status(200).send();
});


const sendMail = (user, callback) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ahowtech2022@gmail.com",
      pass: "*A40wT3C4?"
    }
  });
}

const mailOptions = {
  from: `"<Sender’s name>", "<Sender’s email>"`,
  to: `<${user.email}>`,
  subject: "<Message subject>",
  html: "<h1>And here is the place for HTML</h1>"
};

transporter.sendMail(mailOptions, callback);

//Open your methods file and add a reference to emailjs using the require() function.
var email  = require('emailjs/email');

//Add a new method for email sending and configure the SMTP server:
// sendmail: function(req, res) {

//   console.log(req);
//   var server  = email.server.connect({
//      user:    "ahowtech2022@gmail.com",
//      password:"*A40wT3C4?",
//      host:    "smtp.your-email.com",
//      ssl: true,
//      port: 465
//   });
//   server.send({
//     text:  "Your message body text",
//     from:  "ahowtech2022@gmail.com",
//     to:     "ahowtech2022@gmail.com",
//     subject: "Your message subject",
//     attachment:
//     [
//        {data:"<html><strong>A bit of HTML text</strong></html>", alternative:true},
//        {path:"user/desktop/file.pdf", type:"application/pdf", name:"renamed.pdf"}
//     ]
//  }, function(err, _message) {
//      if(err)
//      console.log(err);
//      else
//      res.json({success: true, msg: 'sent'});
//   });

// }
router.post('/sendmail', actions.sendmail);
