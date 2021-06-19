const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const teacherdb=require('../models/teacher');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');



router.post('/teacherSignup', async (req,res)=>
{    
   
    try{
        const {teachercode,fname,lname,email,password,dept} = req.body;
        const userExist= await teacherdb.findOne({email:email});
        if(userExist){
            console.log('email already exist');
            return  res.status(422).send({message:"email already exist",statusCode:"422"});        
        }
        else{
        const newTeacher=await new teacherdb({teachercode,fname,lname,email,password,dept});
        await newTeacher.save();
        console.log(newTeacher);
        res.status(200).json({message:"signed up successfully"});
        }
        
    }
    catch(err){
        console.log(err);
    }

});



router.post('/teacherLogin',async(req,res)=>{   
    try{
        const { teacherCode ,password }=req.body;
        const userExist=await teacherdb.findOne({ teacherCode });
        if(userExist)
        {
            const match = await bcrypt.compare(password,userExist.password);
            if(match){
                const id = userExist._id;
                const token = jwt.sign({id},'test spot secret');
                const { name, teacherCode, dept } = userExist;
                res.cookie('jwt',token,{maxAge:1*24*60*60*1000});
                console.log(token);
                return res.json({ message:"sign in successfully", user: { name, teacherCode, dept }});
            }
            else{
                return res.json({message:"invalid credential"});
            }
        }
        else{
            return res.json({message:"user doesn't found",statusCode:"404"});
        }

    }catch(err){
        console.log(err);
    }
   
});

module.exports=router;