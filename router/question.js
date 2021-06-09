const express = require('express');
const mongoose = require("mongoose");
mongoose.set('useFindAndModify',false);
const router = express.Router();
const Question = require("../models/question");
const Teacher = require("../models/teacher");
const Student = require("../models/student");
const Subject = require("../models/subject");
const Response = require("../models/response");
router.get("/questionBank",async (req,res)=>{
    try{
        const type = req.query.type;
        if(type === "student"){
            const sem = req.query.sem;
            const dept = req.query.dept;
            const subject = await Subject.find({"sem":sem,"dept":dept});
            res.send(subject);
        }
        else{
            const dept = req.query.tdept;
            const subject = await Subject.find({"teacherDept":dept});
            res.send(subject);
        }
        
    }catch(err){
        console.log(err);
    }
})
router.get("/questionBank/:scode",async (req,res)=>{
    try{
        const qbank = await Question.find({"subjectCode":req.params.scode});
        res.send(qbank);
    }catch(err){
        console.log(err);
    }
})
router.get("/questionBank/:scode/:year",async (req,res)=>{
    try{
        const qpaper = await Question.find({"subjectCode":req.params.scode, "added":req.params.year});
        res.send(qpaper);
    }catch(err){
        console.log(err);
    }
})
router.post("/currentexam",(req,res)=>{

    const roll = req.body.roll;
    const qid = req.body._id.toString();
    const options = req.body.response;
    try{
        const newResponse= new Response({"roll":roll,"qid":qid,"options":options});
        newResponse.save();
        res.status(200).json({"message":"Response submitted successfully"});
    }catch(err){
        console.log(err);
    }

});
router.put("/currentexam/:id", async(req,res)=>{
    const roll = req.body.roll;
    const name = req.body.name;
    const mark = req.body.mark;
    try{
        const qpaper = await Question.findByIdAndUpdate({_id:req.params.id},{marks:[{roll,name,mark}]});
        const student = await Student.findOneAndUpdate({roll},{marks:[{"date":qpaper.added,"subjectCode":qpaper.subjectCode,mark}]});
        res.send("Updated Succesfully");
    }catch(err){
        console.log(err);
    }

});
router.get("/currentexam", async(req,res)=>{
    try{
        const sem = req.query.sem;
        const dept = req.query.dept;
        const subject = await Subject.find({"dept":dept,"sem":sem});
        var scode = [];
        for(let s of subject){
            scode.push(s.code);
        }
        const qpaper = await Question.find({"subjectCode":{ $in: scode }}).sort({"added":-1});
        res.send(qpaper);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;