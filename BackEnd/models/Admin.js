const mongoose=require('mongoose')

const adminschema=new mongoose.Schema({
    adminname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
   
})

module.exports=mongoose.model('Admin',adminschema);