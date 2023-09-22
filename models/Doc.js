const mongoose = require('mongoose');
const docSchema = mongoose.Schema({
    beforeLink: {
        type: String,
        required: true
    },
    afterLink: {
        type: String,
        required: true
    },
    timestamps: true
    }
)
const Doc = mongoose.model("Doc", docSchema);
module.exports = Doc;