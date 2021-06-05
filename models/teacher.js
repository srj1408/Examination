const mongoose = require('mongoose');

const teacher = new mongoose.Schema({
    teachercode: {
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
    email:{
        type:String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Teacher', teacher);