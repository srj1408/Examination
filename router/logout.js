const express=require("express");
const router=express.Router();

router.post("/logout",(req,res)=>{
    res.cookie('jwt',"",{maxAge: 1});
    res.redirect('/login');
});

module.exports=router;