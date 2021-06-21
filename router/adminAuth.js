const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const admindb=require('../models/admin');

router.post('/adminLogin',async (req,res)=>{
   const {name,pass}=req.body;
   const userExist= await admindb.findOne({name:name,pass:pass});
   if(userExist){
       return res.json({"message":"login successfull",user:{name,type:"admin"}});
   }
   else{
       return res.json({"message":"invalid credential"});
   }
})

module.exports=router;