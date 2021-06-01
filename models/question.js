const mongoose = require('mongoose');

const question = new mongoose.Schema({
    qname: {
        type: String,
        required: true
    },
    op: {
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
        }
        
    },
    ans: {
        type: Number,
        required: true
    }
});

const qpaper = new mongoose.Schema({
    scode:{
        type:String,
        required:true
    },
    added:{
        type:Number,
        required:true
    },
    question:[question],
    tcode:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Question', qpaper);