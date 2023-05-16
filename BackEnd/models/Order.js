const mongoose=require('mongoose')

const orderschema=new mongoose.Schema({
    paymenttype:{
        type:String,
             required:true
          
         },
   orderprice:{
      type:Number,
        required:true
      
    },
    purchasedate:{
        type:String,
        required:true
    } ,
    expectdelivery:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    Product:
   [ {
Product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    }
   
 
          
    }]
})

module.exports=mongoose.model('Order',orderschema);