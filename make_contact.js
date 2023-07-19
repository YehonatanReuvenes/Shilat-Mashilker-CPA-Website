var firstName;
var lastName;
var phoneNumber;
var email;
var businessType;
var details;

function showMessage() {
    firstName = document.getElementById("שם פרטי").value;
    lastName = document.getElementById("שם משפחה").value;
    phoneNumber = document.getElementById("מספר טלפון").value;
    email = document.getElementById("דואר אלקטרוני").value;
    businessType  = document.getElementById("סוג עסק").value;
    details = document.getElementById("פרטי הפנייה").value;


    if( firstName === '' ||
    lastName === '' ||
    phoneNumber === '' ||
    email === '' ||
    businessType === ''){
        alert("יש למלא את כל השדות המסומנים ב *");
    }
    else{
        sendEmail();
        alert("שליחת הבקשה נכשלה ניתן ליצור קשר דרך הרשתות האחרות בעמוד")
    }
}

function sendEmail(){
    // var scriptTag = document.createElement('script');
    // scriptTag.src = 'https://smtpjs.com/v3/smtp.js';
    // scriptTag.onload = function() {
    //     Email.send({
    //         Host : "smtp.elasticemail.com",
    //         Username : "jonatan3705@gmail.com",
    //         Password : "B7EDBB544ABDECA31EE826C0D484AB50A8DF",
    //         To : 'jonatan3705@gmail.com',
    //         From : "jonatan3705@gmail.com",
    //         Subject : "לקוח חדש יוצר קשר דרך האתר",
    //         Body :  "שם:" +firstName+ " " +lastName+
    //                 "<br>מספר טלפון:" +phoneNumber+
    //                 "<br>כתובת מייל:" +email+
    //                 "<br>סוג עסק:" +businessType+
    //                 "<br>פרטים נוספים:" +details
    //     }).then(
    //       message => alert(message)
    //     );
    // };
    // document.head.appendChild(scriptTag);
}
