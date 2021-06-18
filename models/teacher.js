const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const teacher = new mongoose.Schema({
    teacherCode: {
        type: String,
        required: true
    },
    name: {
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
    },
    dept:{
        type: String,
        required: true
    }
});

teacher.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
    }
    next();
})

module.exports = mongoose.model('Teacher', teacher);