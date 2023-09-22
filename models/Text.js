const mongoose = require('mongoose');
const textSchema = mongoose.Schema({
    link: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    timestamps: true
    }
)
const Text = mongoose.model("Text", textSchema);
module.exports = Text;