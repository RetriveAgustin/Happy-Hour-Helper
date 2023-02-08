const nodemailer = require("nodemailer");
var dotenv = require('dotenv');
dotenv.config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_APP_PSWD,
  },
});

module.exports = {
     welcomeUser: async function welcomeUser(name, email) {
          try {
               let info = await transporter.sendMail({
                    from: process.env.EMAIL,
                    to: email,
                    subject: `¡Hola ${name}!`,
                    html: "<p>Bienvenido a Happy Hour Helper. Que tengas un buen paso por nuestros servicios.</p>"
               })
               console.log(info.messageId)
               console.log('Mail service working')
          } catch (error) {
               console.log(error.message)
          }
     },

     orderSuccess: async function orderSuccess() {
          try {
               
          } catch (error) {
               
          }
     }
}
