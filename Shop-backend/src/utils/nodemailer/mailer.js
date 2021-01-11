const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'robot12-00@mail.ru',
            pass: 'theRbot123'
        }
    },
    {
        from: 'Robot Verify <robot12-00@mail.ru>',
    }
)

const mailer = obj => {
    const message = {
        to: obj.email,
        subject: `Բարև հարգելի ${obj.fullname}:Շնորհավորում եմ Դուք հաջողությամբ գրանցված եք մեր կայքում`,

        html: `
            <i>Ձեր հաստատման լինքը գտնվում ե ներքեվում:</i>
        <div >http://localhost:3000/signup/verify?hash=${obj.confirm_hash}<div />
            <div>Նամակին կարող եք չպատասխանել:</div>
`
    }
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err)
    })
}







module.exports = mailer