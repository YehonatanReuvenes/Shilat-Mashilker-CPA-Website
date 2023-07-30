

var firstName;
var lastName;
var phoneNumber;
var email;
var businessType;
var details;

function showMessage() {

    sendEmail();
    alert("try")
    // firstName = document.getElementById("שם פרטי").value;
    // lastName = document.getElementById("שם משפחה").value;
    // phoneNumber = document.getElementById("מספר טלפון").value;
    // email = document.getElementById("דואר אלקטרוני").value;
    // businessType  = document.getElementById("סוג עסק").value;
    // details = document.getElementById("פרטי הפנייה").value;


    // if( firstName === '' ||
    // lastName === '' ||
    // phoneNumber === '' ||
    // email === '' ||
    // businessType === ''){
    //     alert("יש למלא את כל השדות המסומנים ב *");
    // }
    // else{
    //     sendEmail();
    //     // alert("שליחת הבקשה נכשלה ניתן ליצור קשר דרך הרשתות האחרות בעמוד")
    // }
}

const nodemailer = require('nodemailer');

async function sendEmail() {
  // Create a transporter using Gmail SMTP settings
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jonatan3705@gmail.com', // Sender email address (use your Gmail account)
      pass: 'jonatan7', // Replace with the actual password or use environment variables for security
    },
  });

  // Email content
  let mailOptions = {
    from: 'jonatan3705@gmail.com', // Sender address (use your Gmail account)
    to: 'jonatan3705@gmail.com', // Recipient address (replace with the recipient's email)
    subject: 'Test Email', // Subject line
    text: 'This is a test email sent from your_test1@gmail.com to test2@gmail.com.', // Email body in plain text
    // You can also use HTML in the email body using the `html` property instead of `text`.
  };

  try {
    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.log('Error occurred while sending email:', error);
  }
}

// function sendEmail(){






    // const nodemailer = require('nodemailer');

    // // Create a Nodemailer transporter
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.elasticemail.com',
    //   port: 2525, // Use the appropriate port for SSL/TLS: 587 for STARTTLS or 465 for SMTPS
    //   secure: false, // Set to true if you are using port 465 (SMTPS)
    //   auth: {
    //     user: 'jonatan3705@gmail.com',
    //     pass: 'B7EDBB544ABDECA31EE826C0D484AB50A8DF',
    //   },
    // });
    
    // // Define email content
    // const mailOptions = {
    //   from: 'jonatan3705@gmail.com',
    //   to: 'jonatan3705@gmail.com',
    //   subject: 'Hi',
    //   text: 'Hi there!',
    // };
    
    // // Send the email
    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     console.log('Error:', error.message);
    //   } else {
    //     console.log('Email sent:', info.response);
    //   }
    // });







    // Email.send({
    //     Host: "smtp.elasticemail.com",
    //     Username: 'jonatan3705@gmail.com',
    //     Password: "B7EDBB544ABDECA31EE826C0D484AB50A8DF",
    //     To: 'jonatan3705@gmail.com',
    //     From: 'jonatan3705@gmail.com',
    //     Subject: "hi",
    //     Body: "hi"
    // }).then((message) => alert(message));










    // var scriptTag = document.createElement('script');
    // scriptTag.src = 'https://smtpjs.com/v3/smtp.js';
    // scriptTag.onload = function() {
        // Email.send({
        //     Host : "smtp.gmail.com",
        //     Username : "jonatan3705@gmail.com",
        //     Password : "B7EDBB544ABDECA31EE826C0D484AB50A8DF",
        //     To : 'jonatan3705@gmail.com',
        //     From : "jonatan3705@gmail.com",
        //     Subject : "לקוח חדש יוצר קשר דרך האתר",
        //     Body :  "שם:" +firstName+ " " +lastName+
        //             "<br>מספר טלפון:" +phoneNumber+
        //             "<br>כתובת מייל:" +email+
        //             "<br>סוג עסק:" +businessType+
        //             "<br>פרטים נוספים:" +details    
        // }).then(
        //   message => alert(message)
        // );
    // };
    // document.head.appendChild(scriptTag);
// }
