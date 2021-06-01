const mongoose = require('mongoose');

const subject = new mongoose.Schema({
    scode: {
        type: String,
        required: true
    },
    sname: {
        type: String,
        reuired: true
    },
    sem: {
        type: Number,
        reuired: true
    },
    dept: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('Subject', subject);