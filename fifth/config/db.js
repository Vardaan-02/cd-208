const mongoose = require("mongoose"); // this module will help me to connect to mongo db server 

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI); // this is a blocking call due to use of await
        console.log("Mongo DB Connected");
    }
    catch(err){
        console.log("Database connection failed", err);
    }
}

module.exports = connectDB;