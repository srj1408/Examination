const express = require("express");
const router =express.Router();
const mongoose=require("mongoose");
const questiondb=require("../models/question");


router.post("/questionBank",(req,res)=>{

    const questionData=req.body;
    console.log(questionData);
    try{
        const newQuestionPaper= new questiondb(questionData);
        newQuestionPaper.save();
        res.status(200).json({"message":"question paper added successfully"});
    }catch(err){
        console.log(err);
    }

});

router.get("/questionBank",async (req,res)=>{
    try{
        const questionBank= await questiondb.find();
        res.send(questionBank);
    }catch(err){
        console.log(err);
    }
})

router.get("/questionBank/:teacherCode",async (req,res)=>{
    try{
        const tcode=req.params.teacherCode;
        const user=await questiondb.find({tcode:tcode});
        if(user && user.length != 0) 
        {
            console.log("user exist");
            res.send(user);
        }
        else
        {
            res.status(404).json({"message":"user does not seem to have created any question paper"});
        }
    }
    catch(err){
        console.log(err);
    }

});


module.exports=router;