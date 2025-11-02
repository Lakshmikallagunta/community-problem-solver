const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  name: String,
  category: String,
  description: String,
  file: String, // store filename or URL
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Report", reportSchema);

