const nodemailer = require('nodemailer');
const {USER_EMAIL,SECRET_PASS} = require('../config/credentials');
const SMTP_PORT = 587;
const HOST_SERVICE = 'smtp-relay.brevo.com';
const SENDER_EMAIL = 'sauravsuman0199@gmail.com';
const RECEIVER_EMAIL = "saurav.ksit@gmail.com";
const CC = [];
const BCC = [];
const EMAIL_SUBJECT = "HELLO form Saurav"
const EMAIL_BODY_HTML = "<h1> Vikram Samvat 2081 ki hardik shubhkamnayen</h1>"
const options = {
    from: SENDER_EMAIL,
    to: RECEIVER_EMAIL,
    cc:CC,
    bb:BCC,
    subject:EMAIL_SUBJECT,
    html:EMAIL_BODY_HTML
};
const transporter = nodemailer.createTransport({
    host: HOST_SERVICE,
    port:SMTP_PORT,
    secure:false,
    auth:{
        user:USER_EMAIL,
        pass: SECRET_PASS
    }
    
})
module.exports = {transporter,options}