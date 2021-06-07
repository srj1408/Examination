const mongoose = require('mongoose');

const response = new mongoose.Schema({
    roll: {
        type: Number,
        required: true
    },
    qid: {
        type: String,
        required: true
    },
    options : []
});
module.exports = mongoose.model('Response', response);