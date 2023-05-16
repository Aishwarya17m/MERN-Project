const mongoose=require('mongoose')

const tokenschema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    token:{
        type:String,
        required:true,
      
    },
  
    createdAt:{
        type:Date,
        default:Date.now,
        exprires:3600
    }
})

module.exports=mongoose.model('Token',userschema);



