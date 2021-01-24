const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    shortcode: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Urls'
    },
    count: {
        type: Number,
        default: ''
    },
}, { timestamps: true }, );

module.exports = mongoose.model('Shortcode_details', taskSchema);