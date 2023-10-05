const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  num: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  sType: {
    type: String,
    required: true
  },
  package: {
    type: Number,
    required: true
  },
  wk: [],
  colour: {
    type: Number,
    required: true
  },
  startYr: {
    type: Number,
    required: true
  },
  startMth: {
    type: Number,
    required: true
  },
  startDay: {
    type: Number,
    required: true
  },
  classesNishCancelled: {
    type: Number,
    required: true
  },
  birthday: {
    type: String,
    required: true
  },
  studentImageFileName: {
    type: String,
    required: true
  }
});

// second parameter }, { timestamps: true}); -- adds createdAt and modifiedAt automatically

//Note the name in model MUST be the singular version of the collection name
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;