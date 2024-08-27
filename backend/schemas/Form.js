const mongoose = require("mongoose");

const form = new mongoose.Schema({
  title: String,
  desc: String,
  questions: Array,
});

module.exports = mongoose.model("formdata", form);
