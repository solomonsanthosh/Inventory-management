const nodemailer = require("nodemailer");
var Excel = require("exceljs");
var toCsv = require("to-csv");
const path = require("path");

const { Products, Suggestion } = require("../database/database");

const sendEmail = async (req, res) => {
  try {
    const { company_id, product, quantity } = req.body;
    const productDetails = await Products.findOne({
      where: { product_part_no: product },
    });
    const companyDetails = await Suggestion.findOne({
      where: { company_id: company_id },
    });
    console.log(productDetails);
    var filename = "purchase-order.xlsx";
    var workbook = new Excel.Workbook();
    const filePath = path.join(__dirname, "../assets/purchase-order.xlsx");
    console.log(filePath);
    workbook.xlsx.readFile(filePath).then(async function () {
      var worksheet = workbook.getWorksheet("PurchaseOrder");
      var row1 = worksheet.getRow(1);
      var row5 = worksheet.getRow(5);
      var row9 = worksheet.getRow(9);
      var row11 = worksheet.getRow(11);
      var row12 = worksheet.getRow(12);
      var row13 = worksheet.getRow(13);
      var row20 = worksheet.getRow(20);
      var row37 = worksheet.getRow(37);
      var row41 = worksheet.getRow(41);

      row1.getCell(1).value = "name";
      row5.getCell(7).value = Date.now();
      row9.getCell(1).value = companyDetails.company_name;
      row11.getCell(1).value = companyDetails.address;
      row12.getCell(1).value = [companyDetails.city, companyDetails.pincode];
      row13.getCell(1).value = companyDetails.phone;
      row20.getCell(1).value = productDetails.product_part_no;
      row20.getCell(2).value = productDetails.product_name;
      row20.getCell(5).value = quantity;
      row20.getCell(6).value = productDetails.product_price;
      var total = quantity * productDetails.product_price;
      row20.getCell(7).value = total;
      row37.getCell(7).value = total;
      row41.getCell(7).value = total;
      let buffer = await workbook.xlsx.writeBuffer();
      // return workbook.xlsx.writeFile(filePath);
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "solomonsanthosh2064@gmail.com", // enter you mail here
          pass: "wduehhqcrobapkov", // enter yor password but not the direct password app password
        },
        secure: false,
        tls: {
          rejectUnauthorized: false,
        },
      });
      let info = await transporter.sendMail({
        from: "Inventory Management",
        to: companyDetails.company_email,
        subject: "Request for a product",
        html: `
              <div>
                  <h2>This is a email from Inventory Management project head</h2>
                  <p>We request you to send the product : ${product} to us</p>
              </div>`,
        attachments: [
          {
            filename,
            content: buffer,
            contentType:
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          },
        ],
      });

      console.log(info.response);
      res.send(`successfully sent the email`);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
