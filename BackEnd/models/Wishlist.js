const mongoose=require('mongoose')

const wishlistschema=new mongoose.Schema({
    User:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    Product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Product'
    }
   
   
})

module.exports=mongoose.model('Wishlist',wishlistschema);