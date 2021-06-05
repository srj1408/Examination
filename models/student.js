const mongoose = require('mongoose');

const student = new mongoose.Schema({
    roll: {
        type: Number,
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
    sem: {
        type: Number,
        required: true
    },
    dept: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        reuired: true
    },
    marks: []
});
module.exports = mongoose.model('Student', student);