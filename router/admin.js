const express = require("express");
const router =express.Router();
const mongoose=require("mongoose");
const Student=require("../models/student");
const Teacher = require("../models/teacher");
const Subject = require("../models/subject");
router.post("/addStudent",async(req,res)=>{

    const studentData = req.body;
    try{
        const userExist = await Student.findOne({roll: studentData.roll});
        if(userExist){
            return res.status(422).json({"message":'Already exists'});             
        }else{
            const newStudent= new Student(studentData);
            newStudent.save();
            res.status(200).json({"message":"Student added successfully"});
        }
    }catch(err){
        console.log(err);
    }

});
router.post("/addTeacher",async(req,res)=>{

    const teacherData = req.body;
    try{
        const userExist = await Teacher.findOne({teacherCode: teacherData.teacherCode});
        if(userExist){
            return res.status(422).json({"message":'Already exists'});             
        }else{
            const newTeacher= new Teacher(teacherData);
            newTeacher.save();
            res.status(200).json({"message":"Teacher added successfully"});
        }
    }catch(err){
        console.log(err);
    }

});
router.post("/addSubject",async(req,res)=>{

    const subjectData = req.body;
    try{
        const subjectExist = await Subject.findOne({code: subjectData.code});
        if(subjectExist){
            return res.status(422).json({"message":'Already exists'});             
        }else{
            const newSubject= new Subject(subjectData);
            newSubject.save();
            res.status(200).json({"message":"Subject added successfully"});
        }
    }catch(err){
        console.log(err);
    }

});


module.exports=router;