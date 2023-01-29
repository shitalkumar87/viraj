const express=require("express")
const {TeacherModel} =require("../model/admin.model")
const  TeacherRouter=express.Router()
require("dotenv").config();
const bcyrpt=require("bcrypt")
const jwt = require("jsonwebtoken");
const key=process.env.KEY

TeacherRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
         const user=await TeacherModel.find({email})
         if(user.length>0){
           bcyrpt.compare(password,user[0].password,(err,result)=>{
               if(result){
                   var token=jwt.sign({course:"backend"},process.env.KEY)
                   res.send({msg:'Login Done',"token":token})
               }
               else{
                   res.send("Wrong Credentials")
                 }
           })
           
         }
         else{
           res.send("Wrong Credentials")
         }
    }
    catch(err){
       res.send("Login Error")
    }

})

TeacherRouter.post("/signup",async(req,res)=>{
  const {email,password}=req.body
  const registeruser=await TeacherModel.findOne({email})
       
  if(registeruser?.email){
      res.send({msg:"User already exists"    })
  }
 else{
  try{
      bcyrpt.hash(password,5,async(err,secure_pwd)=>{
         if(err){
              
             res.send({msg:"Register Again"})
         }
         else{
             const user=new TeacherModel( {email,password:secure_pwd})
             await user.save()
             res.send({msg:"User Register Successfully"})
         }
      })
  }
  catch(err){
     res.send( {msg:"Register Again"})
  }
 }
  

})

module.exports={TeacherRouter}