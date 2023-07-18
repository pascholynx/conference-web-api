const mongoose = require('mongoose');

const RegistrationSchema = mongoose.Schema({
 surname: {
  type: String,
  required: true,
 },
 otherNames: {
  type: String,
  required: true,
 },
 email: {
  type: String,
  required: true,
 },
 phoneNumber: {
  type: String,
  required: true,
 },
 areaOfInterest: {
  type: String,
  enum: ['Frontend', 'Backend', 'DevOps', 'Mobile', 'UI/UX', 'Data Science', 'Cyber Security', 'Cloud Computing', 'Others'],
  required: true,
 },
 location: {
  type: {
   type: String,
   enum: ['Point'],
   required: true
  },
  coordinates: {
   type: [Number],
   required: true
  }
 }
});

module.exports = mongoose.model('registrations', RegistrationSchema);
