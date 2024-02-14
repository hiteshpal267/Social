const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
    const transporter = nodeMailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "b2123b961adef7",
        pass: "003054e886b84d"
      }
      });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.mail,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};


// SMPT_HOST="smtp.gmail.com"
// SMPT_PORT=465
// SMPT_MAIL="mymailforabhi@gmail.com"
// SMPT_PASSWORD="passwordForAbhishek"
// SMPT_SERVICE="gmail"
