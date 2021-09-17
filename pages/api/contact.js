import {apiHandler, clientsDb} from 'helpers/api';

export default apiHandler({
  post: contact,
});

async function contact(req, res) {
  const contactData = req.body;
  const response = await clientsDb.contact(contactData);
  const {data} = response;

  const newLocal = require('nodemailer');
  //require('dotenv').config();

  let nodemailer = newLocal;
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'amtroadies@gmail.com',
      pass: '@mit123#',
    },
    secure: true,
  });

  const {contact_email} = contactData;
  const mailData = {
    from: 'amtroadies@gmail.com',
    to: contact_email,
    subject: `Message From Senior Portal`,
    text: ' Senior Portal. | Sent from: Seniorportalmail@gmail.com',
    html: `<div>Message goes here. </div><p>Sent from:
    Seniorportalmail@gmail.com</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log('email error = ', err);
    else console.log('email info = ', info);
  });

  return res.status(200).json({message: 'success', respondeData: data});
}
