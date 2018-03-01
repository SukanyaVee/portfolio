require('dotenv').config();

const   express = require('express'),
        bodyParser = require('body-parser'),
        nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));


app.post('/message', (req, res) => {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    })

    const mailOptions = {
        from: process.env.USER,
        to: process.env.USER,
        subject: `New Message from ${req.body.name} at ${req.body.org}`,
        text: `${req.body.name} (${req.body.email}) at ${req.body.org} sent this message: "${req.body.message}"`,
        html: `<h4>${req.body.name} </h4><h4>(${req.body.email})</h4> at <h3>${req.body.org}</h3> sent this message: <p>"${req.body.message}"</p>`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log('error', error)
            res.status(500).send('Could not send message');
        } else {
            console.log('Email sent:', info);
            res.status(200).send('Message Sent')
        }
    })
})


const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})

const port = process.env.SERVER;
const server = app.listen(port, () => console.log(`Up and running on port ${port}`));