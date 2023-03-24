require("dotenv").config();
const mongoose = require("mongoose");

const DB_url = "mongodb://0.0.0.0:27017/Ecom";
mongoose.connect(DB_url, { useNewUrlParser: true }).then(() => console.log("Db connected")).catch(err => console.log(err.message));
