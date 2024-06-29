
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  content: String,
  tags: [String]
},{timestamps:true});

module.exports = mongoose.model('Note', noteSchema);
