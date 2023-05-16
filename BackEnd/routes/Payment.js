const express=require('express');

const router=express.Router()
const stripe=require("stripe")("sk_test_51JmUuGSEXh4QGadB7jSo1LuL4t7ra4MY0KIQs98uUt6M9NkgRikJZP09ztP7fZN6m90zCFh9FnAT56fVNKnKaG3L00i3kQUxDZ")




router.post("/cardpayment",async(req,res)=>{
    let{amount,id}=req.body
    try{
        const card=await stripe.paymentIntents.create({
            amount,
            currency:"IN",
            description:"TimeCraft",
            payment_method:id,
            confirm:true
        })
        console.log("card",card)
        res.json({
            message:"payment done!",
            success:true
        })
    }
    catch(error){
        console.log(error)
        res.json({
            message:"payment failed",
            success:false
        })
    }
})



module.exports = router;
