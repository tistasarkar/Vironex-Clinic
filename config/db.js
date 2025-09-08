const mongoose = require('mongoose');

const connectDB = async () => {
  try {
   
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

console.log("MONGO_URI from env:", process.env.MONGO_URI);


module.exports = connectDB;