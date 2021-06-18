const mongoose = require('mongoose');
const bcrypt=require('bcrypt');

const student = new mongoose.Schema({
    roll: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
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

student.pre('save',async function(next){
    if(this.isModified('pass')){
        
        this.pass=await bcrypt.hash(this.pass,12);
    }
    next();
})

module.exports = mongoose.model('Student', student);