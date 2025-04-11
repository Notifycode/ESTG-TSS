const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = connectDB;