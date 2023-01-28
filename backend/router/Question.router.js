const express=require("express")
 
const QuestionRouter=express.Router()
const {PostModel}=require("../model/post.model")
QuestionRouter.get("/",async(req,res)=>{
     
    const data= await PostModel.find()
     try{
         res.send({"data":data})
     }
     catch(err){
        res.send("Eroor")
     }
})

QuestionRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
           let new_notes=new PostModel(payload)
           await new_notes.save()
           res.send({msg:"create "})
    }
    catch(err){
         res.send("wrong Credentials")
    }
    
    
})

QuestionRouter.patch("/edit/:id",async(req,res)=>{
    const Id=req.params.id;
    const payload=req.body;
    // const note= await PostModel.findOne({_id:Id})
    
    try{
         
            await PostModel.findByIdAndUpdate({_id:Id},payload)
            res.send("update the Answer Succesfully")
         
         
         
    }
    catch(err){
        res.send("Wrong Credentials")
    }
     
})

QuestionRouter.delete("/delete/:id",async(req,res)=>{
    const Id=req.params.id;
    
     
    try{
       
       
            await PostModel.findByIdAndDelete({"_id":Id})
            res.send("Data deleted Successfully")
        
         
        
    }
    catch(err){
        res.send("Wrong Credentials")
    }
})

QuestionRouter.patch("/ansdelete/:id",async(req,res)=>{
    const Id=req.params.id;
    const post=await PostModel.findById({"_id":Id})
     
    let updateans=post.answer
    updateans.slice(0,1)
     
    try{
       
        await PostModel.findByIdAndUpdate({"_id":Id},updateans)
             
            res.send("Data deleted Successfully")
        
         
        
    }
    catch(err){
        res.send("Wrong Credentials")
    }
})

module.exports={QuestionRouter}