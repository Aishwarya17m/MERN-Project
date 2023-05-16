const mongoose=require('mongoose')

const orderdetailsschema=new mongoose.Schema({
   Order:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Order'
    },
   Product:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'Product'
      
    }   
  
    
    
})

module.exports=mongoose.model('OrderDetails',orderdetailsschema);