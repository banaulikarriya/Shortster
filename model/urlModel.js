const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    url: {
        type: String,
        required: true,
    },
    shortcode: {
        type: String,
        required: true,
        unique: true
    },
    details: {
        type: String,
        default: ''
    },
    status: {
        type: Boolean,
        default: true,
    },
    counter: {
        type: Number,
        default: 0,
    },
}, { timestamps: true }, );

module.exports = mongoose.model('Urls', taskSchema);