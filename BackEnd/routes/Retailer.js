const express=require('express');
const { ObjectId } = require('mongodb');
const { isObjectIdOrHexString } = require('mongoose');
const ObjectID = require('mongodb').ObjectId;
const Admin = require('../models/Admin');
const ProductApproval = require('../models/ProdApproval');
const Retailer = require('../models/Retailer');
const router=express.Router()

router.post('/addretailer',async(req,res)=>{
    const { 
 
        retailername,
             email,
             password,
            } = req.body;
 
             const retail= new Retailer({
               
                retailername,
             email,
             password,
             })
             await retail.save(err => {
                 if (err) {
                    res.status(404).send({error:'error'})
                 }
                 else {
                     res.send({ message: "sucessfully added" })
                    
                 }
             })
           
         
     })
router.get('/approval',async(req,res)=>{
    try{
    
        const retail= await  ProductApproval.find().populate('Retailer')
        res.json(retail)
    }
    catch(err){
        console.log(err)
    }
    })
  
router.get('/',async(req,res)=>{
    try{
        const retail=await Retailer.find()
        res.json(retail)
    }
    catch(err){
        console.log(err)
    }
    })
    router.get('/approval/:id',async(req,res)=>{
        try{
            console.log(req.params.rid)
            const prod=await ProductApproval.findById(req.params.id)
            res.json(prod)
        }
        catch(err){
            console.log(err)
        }
        })
        router.put('/approval/:id',async(req,res)=>{
            try{
                ProductApproval.findByIdAndUpdate({_id:req.params.id},req.body).then(function(prod){
                    res.send(prod);
                })

            }
            catch(err){
                console.log(err)
            }
        })

        router.delete('/reject/:id',async(req,res)=>{
           
        await ProductApproval.remove({_id:req.params.id}).exec()

        .then(result=>{
            console.log(result)
            res.send(result)
        })
        .catch((err)=>{

        })
        
           
           
        })

router.post('/productap/:rid',async(req,res)=>{

        const { 

       Retailer,
            product_name,
            product_category,
            product_subcategory,
            price,
            description,
            product_image,
            brand,
            stock,
           
        status } = req.body;

            const prodap= new ProductApproval({
              
                Retailer,
                product_name,
                product_category,
                product_subcategory,
                price,
                description,
                product_image,
                brand,
                stock,
                status
            })
            await prodap.save(err => {
                if (err) {
                   res.status(404).send({error:'upload image'})
                }
                else {
                    res.send({ message: "sucessfully added for approval" })
                   
                }
            })
          
        
    })

    
module.exports=router;