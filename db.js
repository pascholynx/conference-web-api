const mongoose = require('mongoose');
require ('dotenv').config();

const connectDB = async () => {
 try {
  await mongoose.connect(process.env.URI, { 
   useNewUrlParser: true, 
   useUnifiedTopology: true 
   });
  console.log('MongoDB connected...');
 } catch (error) {
  console.error('Error: ', error.message);
  // Exit process with failure
  process.exit(1);
 }
};

module.exports = connectDB;
