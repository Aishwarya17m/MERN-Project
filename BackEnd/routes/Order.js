const express=require('express');
const Order = require('../models/Order');
const OrderDetails = require('../models/OrderDetails');
const Product =require('../models/Product')
const router=express.Router()


router.post("/:uid",async(req,res)=>{
    const{
        paymenttype,
        orderprice,
       
        
        purchasedate,
        expectdelivery,
        address,
        User,
        Product

    }=req.body;
    const order=new  Order({
        paymenttype,
        orderprice,
        purchasedate,
        expectdelivery,
        address,
        User,
        Product
    
    })
    await order.save(err => {
        if (err) {
            res.send(err)
            console.log("error")
        }
        else {
            res.send({ message: "order details"})
           
        }
    })
    })
    router.get('/:uid',async(req,res)=>{
        try{
            const order=await  Order.find().populate('User').populate('Product.Product')
            res.json(order)
        }
        catch(err){
            console.log(err)
        }
        })
        router.get('/orderdetails/:id',async(req,res)=>{
            try{
                const order=await  Order.findById(req.params.id).populate('User')
                 
                    res.json(order)
                }
                
            
            catch(err){
                console.log(err)
            }
            })
          
            router.get('/orderuser/:uid',async(req,res)=>{
                try{
                    const order=await Order.find({User:req.params.uid}).populate('User').populate('Product.Product')            
                    res.json(order)
                }
                catch(err){
                    console.log(err)
                }
                })
    
        // router.post("/orderdetails/:uid",async(req,res)=>{
        //     const{
        //       Order,
        //         Product
        
        //     }=req.body;
        //     const orderd=new  OrderDetails({
        //         Order,
        //         Product
            
        //     })
        //     await orderd.save(err => {
        //         if (err) {
        //             res.send(err)
        //         }
        //         else {
        //             res.send({ message: "order details saved"})
                   
        //         }
        //     })
        //     })

        //     router.get('/orderdetails/:uid',async(req,res)=>{
        //         try{
        //             const orderdd=await  OrderDetails.find().populate('Order').populate('Product')
        //             res.json(orderdd)
        //         }
        //         catch(err){
        //             console.log(err)
        //         }
        //         })
module.exports = router;