const mongoose = require('mongoose');

const subject = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
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