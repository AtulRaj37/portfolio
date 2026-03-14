// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'
require('dotenv').config()
export default function handler(req, res) {
  const password = process.env.PASSWORD
  const transporter = nodemailer.createTransport({
    port:465,
    host:'smtp.gmail.com',
    auth:{
      user:'rajatul8496@gmail.com',
      pass:password
    },
    secure:true
  })
  const mailData = {
    from:req.body.email,
    to:'rajatul8496@gmail.com',
    subject:`New message from ${req.body.name}`,
    text:`via ${req.body.email} ${req.body.message}`
  }
  transporter.sendMail(mailData,(err,info)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(info)
    }
  })
  console.log(req.body)
  res.status(200).json({ name: 'John Doe' })
}
