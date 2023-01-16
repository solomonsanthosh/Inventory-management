const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  try {
    const email = req.body.email;
    const product = req.body.product;
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        // https://youtu.be/thAP7Fvrql4  <-- refer this video
        user: "abcd@gmail.com", // enter you mail here
        pass: "1234567890", // enter yor password but not the direct password app password
      },
      secure: false,
      tls: {
        rejectUnauthorized: false,
      },
    });
    let info = await transporter.sendMail({
      from: "Inventory Management",
      to: email,
      subject: "Request for a product",
      html: `
            <div>
                <h2>This is a email from Inventory Management project head</h2>
                <p>We request you to send the product : ${product} to us</p>
            </div>`,
    });
    console.log(info.response);
    res.send(`successfully sent the email to : ${email}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
