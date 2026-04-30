const mongoose = require("mongoose");

const openingSchema = new mongoose.Schema({
  title: String,   
  description: String
});

module.exports = mongoose.model("Opening-details", openingSchema);