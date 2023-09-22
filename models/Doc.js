const mongoose = require("mongoose");
const docSchema = new mongoose.Schema(
  {
    beforeLink: {
      type: String,
      required: true,
    },
    afterLink: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // enable automatic timestamp fields
  }
);
const Doc = mongoose.model("Doc", docSchema);
module.exports = Doc;
