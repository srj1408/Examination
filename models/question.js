const mongoose = require('mongoose');

const question = new mongoose.Schema({
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

});

const qpaper = new mongoose.Schema({
    subjectCode:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    questions: [question],
    teacherCode:{
        type:String,
        required:true
    },
    marks: []
}, {timestamps: {createdAt: "added", updatedAt: false}});

module.exports = mongoose.model('Question', qpaper);