// config/db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = "mongodb+srv://ynader2017:MI4GrqpKu8XxZWcV@cluster0.orzgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;