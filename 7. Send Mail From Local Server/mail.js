var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS: true,
    auth:{
        user:'shaswata.barua0499@gmail.com',
        pass: 'Suro@#9261'
    }
});
var mailOption = {
    from: 'shaswata.barua0499@gmail.com',
    to: 'shaswata.barua0499@gmail.com',
    subject: 'Test Node js',
    text: 'Test Successful'
}
transport.sendMail(mailOption,function(error, info){
    if(error){
        console.warn(error);
    }
    else{
        console.warn("email has been sent", info.response);
    }
})