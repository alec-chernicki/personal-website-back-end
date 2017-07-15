const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport');

const EMAIL_ADDRESS = 'aleccortega@gmail.com';
const EMAIL_SUBJECT_LINE = 'Contact Form | Personal Website';
const DOMAIN = 'alecortega.com';
const auth = {
  auth: {
    api_key: process.env.MAILGUN_KEY,
    domain: DOMAIN
  }
};   
const nodemailerMailgun = nodemailer.createTransport(mailgun(auth));

exports.post  = function(req, res) {
  const sender = req.body.email;
  const name = req.body.name;
  const body = req.body.message;

  const mailOptions = {
    to: EMAIL_ADDRESS,
    from: sender,
    bcc: EMAIL_ADDRESS,
    subject: EMAIL_SUBJECT_LINE,
    html: name + '<br><br>' + body
  };

  nodemailerMailgun.sendMail(mailOptions, function(error) {
    if (error) {
      console.log(error);
      res.sendStatus(500);
      return
    }
    res.sendStatus(200);
  });
}
