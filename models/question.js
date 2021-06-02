const mongoose = require('mongoose');

const question = new mongoose.Schema({
    qname: {
        type: String,
        required: true
    },
    op1:{
        type: String,
        required: true
    },
    op2: {
        type: String,
        required: true
    },
    op3: {
        type: String,
        required: true
    },
    op4: {
        type: String,
        required: true
    },
    ans: {
        type: Number,
        required: true
    }
});

const qpaper = new mongoose.Schema({
    subjectCode:{
        type:String,
        required:true
    },
    added:{
        type:Date,
        required:true
    },
    question:[question],
    teacherCode:{
        type:String,
        required:true
    },
    submitted:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Question', qpaper);