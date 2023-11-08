const mongoose = require("mongoose");
const doc_to_docSchema = new mongoose.Schema(
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
const Doc = mongoose.model("Doc", doc_to_docSchema);
module.exports = Doc;
