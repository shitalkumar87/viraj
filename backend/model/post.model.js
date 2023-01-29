const mongoose=require("mongoose")

const postschema=mongoose.Schema({
    question: {
        type:String,
        require:true
     },
    answer:{
        type:Array
    }


     
},{
    versionKey:false,
    timestamps:true
}
)

PostModel=mongoose.model("post",postschema)
module.exports={PostModel}

 
