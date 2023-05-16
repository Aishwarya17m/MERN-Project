const express=require('express');
const router=express.Router()
const Product=require('../models/Product')


 
router.post('/AddProducts/:aid',async(req,res)=>{
 
    const { 
      
       Retailer,
        product_name,
        product_category,
        product_subcategory,
        price,
        description,
        product_image,
        brand,
        stock
       
     } = req.body;

        const products= new Product({
           
            Admin:req.params.aid,
            Retailer,
            product_name,
            product_category,
            product_subcategory,
            price,
            description,
            product_image,
            brand,
            stock
            
        })
        
    await products.save(err => {
        if (err) {
            res.send(err)
            
        }
        else {
            res.send({ message: "sucessfully added "})
            console.log("sucessfully addedd")
        }
    })
})
router.get('/product/:pid',async(req,res)=>{
    try{
       
        const prod=await Product.findById(req.params.pid)
        res.json(prod)
    }
    catch(err){
        console.log(err)
    }
    })
    router.get('/Allproducts',async(req,res)=>{
        try{
            const products=await Product.find().populate('Retailer').populate('Admin')
            res.json(products)
        }
        catch(err){
            console.log(err)
        }
        })
        router.put('/productsupdate/:id',async(req,res)=>{
            const{stock}=req.body
            try{
                const products=await Product.findByIdAndUpdate(req.params.id,{
                    stock:stock-1
                })
                res.json(products)
            }
            catch(err){
                console.log(err)
            }
            })
    module.exports=router;