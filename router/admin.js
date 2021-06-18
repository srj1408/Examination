const express = require("express");
const router =express.Router();
const mongoose=require("mongoose");
const Student=require("../models/student");
const Teacher = require("../models/teacher");
const Subject = require("../models/subject");
router.post("/addStudent",(req,res)=>{

    const studentData = req.body;
    try{
        const newStudent= new Student(studentData);
        newStudent.save();
        res.status(200).json({"message":"Student added successfully"});
    }catch(err){
        console.log(err);
    }

});
router.post("/addTeacher",(req,res)=>{

    const teacherData = req.body;
    try{
        const newTeacher= new Teacher(teacherData);
        newTeacher.save();
        res.status(200).json({"message":"Teacher added successfully"});
    }catch(err){
        console.log(err);
    }

});
router.post("/addSubject",(req,res)=>{

    const subjectData = req.body;
    try{
        const newSubject= new Subject(subjectData);
        newSubject.save();
        res.status(200).json({"message":"Subject added successfully"});
    }catch(err){
        console.log(err);
    }

});


module.exports=router;