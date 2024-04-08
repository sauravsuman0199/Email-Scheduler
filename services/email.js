const nodemailer = require('nodemailer');
const {USER,PASS} = require('../config/credentials');
const SMTP_PORT = 587;
const HOST_SERVICE = 'smtp-relay.brevo.com';
SENDER_EMAIL = 'sauravsuman0199@gmail.com';
RECEIVER_EMAIL = "saurav.ksit@gmail.com";
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
        user:USER,
        pass: PASS
    }
    ,
    tls: {
        rejectUnauthorized: false
    },
    debug:true
})
module.exports = {transporter,options}