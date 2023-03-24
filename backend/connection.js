require("dotenv").config();
const mongoose = require("mongoose");

const DB_url = "mongodb://0.0.0.0:27017/Ecom";
mongoose.connect("mongodb+srv://AtlasS:AtlasS123@cluster0.chu2hxx.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true }).then(() => console.log("Db connected")).catch(err => console.log(err.message));
