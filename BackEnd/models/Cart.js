const mongoose=require('mongoose')

const cartschema=new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    Product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    },
   
   quantity:{
        type:Number
      
    }   
})

module.exports=mongoose.model('Cart',cartschema);