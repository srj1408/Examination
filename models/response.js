const mongoose = require('mongoose');

const response = new mongoose.Schema({
    scode: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    roll: {
        type: Number,
        required: true
    },
    qname: {
        type: String,
        required: true
    },
    opt: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Response', response);