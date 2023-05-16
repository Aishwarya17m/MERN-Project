const express = require('express');

const User = require('../models/User')
const router = express.Router()
const bcrypt = require('bcrypt')

router.post('/registration', async (req, res) => {
    try {
       
      
        const { username, email, password, phone } = req.body;

        const user = await User.findOne({ email: email })

        if (user) {
            return res.send({ message: "user already exist" })


        }
        else {
            const salt = await bcrypt.genSalt(Number(10))
            const hashpassword = await bcrypt.hash(password, salt)
            const users = new User({
                username,
                email,
                password: hashpassword,
                phone
            })

            users.save(err => {
                if (err) {
                    res.send(err)
                }
                else {
                    res.send({ message: "sucessfully registered" })
                    console.log("sucessfully registered")
                }
            })


        }


    } catch (error) {
        res.send({ message: "internal server error" });
    }

})
router.post('/UserLogin', async (req, res) => {
    try {
     
        const { email, password } = req.body;
        
        const user = await User.findOne({ email: email })
        if (user) {
           
           console.log(bcrypt.compare(password, user.password))
           console.log(user.password+" "+password)
            bcrypt.compare(password, user.password).then(isMatch => {
                console.log(isMatch)
                if (isMatch) {
              
                    res.send({ message: "login done" })
                }

                else {
                   
                    res.status(404).send({message:"wrong details"})
                }
            })


        } else {
            console.log("not registered")
          res.status(404).send({message:'user not registered'})
        }
    } catch (error) {
        res.status(404).send({message:'innteral server error'})
    }
})


router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    }
    catch (err) {
        console.log(err)
    }
})
router.get('/users/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.json(users)
    }
    catch (err) {
        console.log(err)
    }
})

router.put('/resetpass/:uid', async(req,res)=>{
    let { password,email } = req.body;
    const salt = await bcrypt.genSalt(Number(10))
     let hashpassword = await bcrypt.hash(password, salt)
    let uid=req.params.uid;
const options={new:true}
  
 try{
const users=await User.findByIdAndUpdate(uid,{
    password:hashpassword,
    email:email
   })
   res.json(users)
}
    catch(err){
        res.status(404).send({message:'internal server error'})
     
    }

   
 
   
})

module.exports = router;