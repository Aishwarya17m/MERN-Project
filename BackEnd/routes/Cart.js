const express=require('express');
const router=express.Router()
const Cart=require('../models/Cart')
const User=require('../models/User')
router.post("/addtocart",async(req,res)=>{
const{
    User,
    Product,
    quantity
}=req.body;
const cart=new Cart({
    User,
    Product,
    quantity

})
await cart.save(err => {
    if (err) {
        res.send(err)
    }
    else {
        res.send({ message: "sucessfully added to cart"})
       
    }
})
})

router.get('/cartitems',async(req,res)=>{
    try{
        const carts=await Cart.find().populate('Product').populate('User')
        res.json(carts)
    }
    catch(err){
        console.log(err)
    }
    })
    router.get('/cartitems/:id',async(req,res)=>{
        try{
            const carts=await Cart.find().populate('User').populate('Product')            
            res.json(carts)
        }
        catch(err){
            console.log(err)
        }
        })

       
        router.get('/cartuser/:id',async(req,res)=>{
            try{
                const carts=await Cart.find({User:req.params.id}).populate('User').populate('Product')            
                res.json(carts)
            }
            catch(err){
                console.log(err)
            }
            })
    
    router.delete('/cartdel/:id',async(req,res)=>{
           
        await Cart.remove({_id:req.params.id}).exec()

        .then(result=>{
            console.log(result)
            res.send(result)
        })
        .catch((err)=>{

        })
    })
module.exports=router;