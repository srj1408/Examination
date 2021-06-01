const mongoose = require('mongoose');

const teacher = new mongoose.Schema({
    tcode: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        reuired: true
    }
});
module.exports = mongoose.model('Teacher', teacher);