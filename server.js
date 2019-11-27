const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
const Nexmo = require("nexmo");

const app = express();
//NEXMO API key and api secret
//Enter your API KEY and Secret
const nexmo = new Nexmo({
    apiKey: 'enter your API key',
    apiSecret: 'Enter your Api Secret here'
},
)

//view engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render('contact', { layout: false })
})

app.post("/send", (req, res) => {
    console.log(req.body);
    //It is test version therfore you have to make hostNum registered in NEXMO 
    const visitorNum = req.body.visitorphone;
    const hostNum = req.body.hostnumber;
    //SMS Output for host
    const outForHost = `
        Name: ${req.body.visitorname},
        Email: ${req.body.visitoremail},
        Phone: ${req.body.visitorphone},
        Chek-in Time: ${req.body.checkin},
        Chek-out Time: ${req.body.visitorcheckout}

    `;
    //SMS Output for visitor
    const outForVisit = `
                Name : ${req.body.visitorname}
                Email : ${req.body.visitoremail}
                Phone: ${req.body.visitorphone}
                Chek-in Time: ${req.body.checkin}
                Host Name: ${req.body.hostname}

    `;

    //MAIl output for HOST
    const output = `
            <p> You have a New visitor</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name : ${req.body.visitorname}</li>
            <li>Email : ${req.body.visitoremail}</li>
            <li>Phone: ${req.body.visitorphone}</li>
            <li>Chek-in Time: ${req.body.checkin}</li>
            <li>Chek-out Time: ${req.body.visitorcheckout}</li>


        </ul>
    `;
    //NEXMO Function call for host
    nexmo.message.sendSms(
        hostNum, hostNum, outForHost, { type: 'unicode' },
        (err, responseData) => {
            if (err) {
                console.log(err);

            }
            else {
                console.dir(responseData);

            }
        }
    );
    //Nexmo Function call for Visitor
    nexmo.message.sendSms(
        hostNum, visitorNum, outForVisit, { type: 'unicode' },
        (err, responseData) => {
            if (err) {
                console.log(err);

            }
            else {
                console.dir(responseData);

            }
        }
    );
    //Mail output for Visitor
    const output2 = `
        <p> Details of Your last Visit</p >
            <h3>Contact Details</h3>
            <ul>
                <li>Name : ${req.body.visitorname}</li>
                <li>Email : ${req.body.visitoremail}</li>
                <li>Hsot Phone No.: ${req.body.hostnumber}</li>
                <li>Chek-in Time: ${req.body.checkin}</li>
                <li>Host Name: ${req.body.hostname}</li>


            </ul>
    `;


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.googlemail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'Enter your GMail id Here', // generated ethereal user
            pass: 'Enter your password here' // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: `${req.body.hostemail} `, // sender address
        to: `${req.body.hostemail} `, // list of receivers
        subject: "You have a New Visitor", // Subject line
        text: "Visitor's Detail", // plain text body
        html: output // html body
    });

    let info1 = transporter.sendMail({
        from: `${req.body.hostemail} `, // sender address
        to: ` ${req.body.visitoremail} `, // list of receivers
        subject: "Your host details", // Subject line
        text: "LAst visit details", // plain text body
        html: output2 // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    res.render('contact', { layout: false, msg: 'Email and SMS has been sent' });

});

app.listen(4000, () => {
    console.log("Server Started");

})