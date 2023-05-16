const express = require('express');

const Wishlist=require('../models/Wishlist')
const router = express.Router()

router.post('/:uid/:pid',async(req,res)=>{
 
    

        const list= new Wishlist({
           User:req.params.uid,
           Product:req.params.pid,
      
          
            
        })
    await list.save(err => {
        if (err) {
            res.send(err)
        }
        else {
            res.send({ message: "sucessfully added "})
            console.log("sucessfully addedd")
        }
    })
})

router.get('/AllWishlists',async(req,res)=>{
    try{
        const products=await Wishlist.find().populate('User').populate('Product')
        res.json(products)
    }
    catch(err){
        console.log(err)
    }
    })

    router.delete('/wishlistdel/:id',async(req,res)=>{
           
        await Wishlist.remove({_id:req.params.id}).exec()

        .then(result=>{
            console.log(result)
            res.send(result)
        })
        .catch((err)=>{

        })
    })

    router.get('/wishlistuser/:uid',async(req,res)=>{
        try{
            const wishs=await Wishlist.find({User:req.params.uid}).populate('User').populate('Product')            
            res.json(wishs)
        }
        catch(err){
            console.log(err)
        }
        })

module.exports = router;