const mongoose=require("mongoose")

const teacherschema=mongoose.Schema({
    email: {
        type:String,
        require:true
     },

     password:{
        type:String,
        require:true
     }
})

TeacherModel=mongoose.model("teacher",teacherschema)
module.exports={TeacherModel}