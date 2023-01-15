require("dotenv").config();

const express = require("express");
const app = express();
const db = require("./database/database");
const cookieParser = require('cookie-parser');
const userRoute = require("./routes/User");
const productRoute = require("./routes/product");
const cors = require('cors')
const ticketRoute = require("./routes/ticket");
const storeRoute = require("./routes/store");
const suggestRoute = require("./routes/suggestion");

app.use(cookieParser())
const corsOptions ={
    origin:true, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json());
app.use("/", userRoute);
app.use("/", productRoute);
app.use("/", storeRoute);
app.use("/", ticketRoute);
app.use("/", suggestRoute);


app.listen(process.env.PORT, () => {
	console.log(`server is running at ${process.env.PORT}`);
});
