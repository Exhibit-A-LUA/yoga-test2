const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  year: {
    type: Number,
    required: true
  },
  month: {
    type: Number,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  hour: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    required: true
  },
  slot: {
    type: Number,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  num: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    required: true
  },
  paid: {
    type: Number,
  },
  class: {
    type: Number,
  },
  package: {
    type: Number,
  }
});

const StuClass = mongoose.model('Class', classSchema);

module.exports = StuClass;
