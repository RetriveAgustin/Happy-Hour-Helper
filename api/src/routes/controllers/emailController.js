const nodemailer = require('nodemailer');
require('dotenv').config();
// const transporter = nodemailer.createTransport({
//     host: 'smtp.ethereal.email',
//     port: 587,
//     auth: {
//         user: 'ashlee.dicki70@ethereal.email',
//         pass: '2RunDvgSbP2GFN5tpQ'
//     }
// });

const postEmail = async (req, res) => {
    try {
        const { from, to, subject, text } = req.body;

        const { USER, PASS } = process.env;

        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: USER,
                pass: PASS
            }
        });
        const message = {
            from,
            to,
            subject,
            text
        };
        console.log(message)
        const info = await transporter.sendMail(message);
        res.status(200).json(info.response)
    } catch (error) {
        
    }
}

module.exports = {
    postEmail
}