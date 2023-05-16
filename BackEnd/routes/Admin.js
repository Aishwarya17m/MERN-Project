const express=require('express');
const router=express.Router()
const Admin=require('../models/Admin')

router.post('/addadmin',async(req,res)=>{
    const { 
 
       adminname,
             email,
             password,
            } = req.body;
 
             const admin= await new Admin({
               
                adminname,
             email,
             password,
             })
             await admin.save(err => {
                 if (err) {
                    res.status(404).send({error:'error'})
                 }
                 else {
                     res.send({ message: "sucessfully added" })
                    
                 }
             })
           
         
     })


router.get('/',async(req,res)=>{
    
    try{
        const admin=await Admin.find()
        res.json(admin)
    }
    catch(err){
        console.log(err)
    }
    })

module.exports=router;