const mongoose = require('mongoose');


const qpaper = new mongoose.Schema({
    subjectCode:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    added:{
        type: Date,
        required:true
    },
    question:[
        {
            title: {
                type: String,
                required: true
            },
            options: [],
            correctIndex: {
                type: Number,
                required: true
            },
            marks: {
                type: Number,
                required: true
            }
        }
    ],
    teacherCode:{
        type:String,
        required:true
    },
    submitted:{
        type:Number,
        default: 0
    },
    marks: []
});

module.exports = mongoose.model('Question', qpaper);