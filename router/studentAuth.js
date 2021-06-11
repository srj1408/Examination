const express = require('express');
const router =express.Router();
const studentdb=require('../models/student');
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/studentSignup',async (req,res)=>{
    try{
        const {roll,fname,lname,sem,dept,pass}= req.body;
        const userExist= await studentdb.findOne({roll:roll});
        if(userExist){
            return res.json({message:'email already exist'});             
        }
        
        else{
        const newStudent =new studentdb( {roll,fname,lname,sem,dept,pass});
        await newStudent.save();
        console.log(newStudent);
        return res.json({message:"signed up successfully"});
        }
    }catch(err){
        console.log(err);
    }
});

router.post('/studentLogin',async (req,res)=>{
    
    try{
        const {roll,pass}=req.body;
        const userExist=await studentdb.findOne({roll:roll});
        if(userExist){
            const match=await bcrypt.compare(pass,userExist.pass);
            if(match){
                id=userExist._id;
                const token =jwt.sign({id},'test spot secret');
                res.cookie('jwt',token,{maxAge:1*24*60*60*1000});
                console.log(token);
               return res.json({message:"user signed in successfully"});
            }else{
                return res.json({message:"invalid credential"});
            }
        }
        else{
            return res.json({message:"user does not found"});
        }
    }catch(err)
    {
        console.log(err);

    }
})


module.exports=router;