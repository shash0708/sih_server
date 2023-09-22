const mongoose = require('mongoose');
const textSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: true
    },
    text: {
      type: String,
      required: true
    }
  }, {
    timestamps: true // enable automatic timestamp fields
  });
const Text = mongoose.model("Text", textSchema);
module.exports = Text;