const mongoose=require('mongoose')

const retailschema=new mongoose.Schema({
    retailername:{
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
    },
   
})

module.exports=mongoose.model('Retailer',retailschema);