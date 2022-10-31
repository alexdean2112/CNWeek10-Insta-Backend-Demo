// <------- Imports ------->
require("dotenv").config();
const mongoose = require("mongoose");

// <------- Connection Function ------->
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection established!")
    }
    catch (error) {
        console.log(error)
    }
};

connection();