require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./database/database");
const cookieParser = require('cookie-parser');
const userRoute = require("./routes/User");
const productRoute = require("./routes/product");
const cors = require('cors')
app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use("/", userRoute);
app.use("/", productRoute);

app.listen(process.env.PORT, () => {
	console.log(`server is running at ${process.env.PORT}`);
});
