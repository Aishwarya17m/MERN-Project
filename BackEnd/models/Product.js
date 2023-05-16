const mongoose=require('mongoose')

const productschema=new mongoose.Schema({
    Admin:{
        type:mongoose.Schema.Types.ObjectId,
     
        ref:'Admin'
    },
    Retailer:{
        type:mongoose.Schema.Types.ObjectId,
       
        ref:'Retailer'
    },
    product_name:{
        type:String,
        required:true
    },
    product_category:{
        type:String,
        required:true
    },
    product_subcategory:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        required:true
    },
    product_image:{
       
            type:String,
            required:true
       
    }

   
   
    
})

module.exports=mongoose.model('Product',productschema);