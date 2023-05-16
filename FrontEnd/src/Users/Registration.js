import React, { useEffect, useState } from 'react'
import axios from 'axios'
import login3 from '../images/login3.jpg'
import { Link } from 'react-router-dom'
function Registration() {
   
  const [username,setusername]=useState("")
   const [email,setemail]=useState("")
   const [password,setpassword]=useState("")
   const [phone,setphone]=useState("")
   const [reenterpassword,setreenterpassword]=useState("")
  const [isSubmit,setIssubmit]=useState(false)
  
let [errors,seterrors]=useState({
password:""
  
})
useEffect(()=>{
  console.log(errors)
if(Object.keys(errors).length===0 && isSubmit){
console.log(errors)
}
},[errors])
    const handleSubmit = (e) => { 
      
        e.preventDefault()
      
    const data={
        username:username,
        email:email,
        password:password,
        phone:phone
    };
    
    seterrors(validate(data))
    setIssubmit(true)
  
 if(username && email && password && phone){
  
    axios.post("http://localhost:4000/User/registration",data)
   .then(res=>window.location.href="/userlogin")
   alert("Sucessfully Registered !")
       
     }else{
        alert("enter valid details")
     }
    
    }
    
const validate=(value)=>{
 let errors={}
 
  if(value.password.length<5){
    errors.password="password must contain more than 5 characters"
  }
  
  if( password!==reenterpassword){
    errors.reenterpassword="password not match";
  }
  console.log(password.length)
   if(value.phone.length <10 || value.phone.length>10){
    errors.phone="invalid phone number"
  }
  console.log(value.phone.length)
  
  return errors;
}


  return (
    <div>
        <form >
        
            <div className='username'>
            <h3 className='login-heading'>USER REGISTRATION</h3>
            <div className='login-content'>
            <div className='login-left-content'>
                <img className="reg-left-image" src={login3} alt="Watch"/>

            </div>
            <div className='login-right-content'>
            <div>
                <label htmlFor="username"> Username: </label>
              <input type="text"  name="username" className='login-username' value={username} onChange={e=>
                setusername(e.target.value)} />
            <p style={{color:"red",fontSize:"12px"}}> {errors.username}</p>
              </div>
           

            <div className='email'>
            <label htmlFor="email"> email: </label>
               <input type="email"  name="email" className='login-email' value={email} onChange={e=>setemail(e.target.value)}/>
              <p style={{color:"red",fontSize:"12px"}}> {errors.email}</p> </div>

            <div className='password'>
            <label htmlFor="password">password: </label>
             <input type="password"   name="password" className='login-password' value={password} onChange={e=>setpassword(e.target.value)} />
        <p style={{color:"red",fontSize:"12px"}}> {errors.password}</p>
            </div>

            <div className='re-enterpassword'>
            <label htmlFor="re-enterpassword">Re-enter password: </label>
             <input type="password" className='login-re-enterpassword'   name="reenterpassword" value={reenterpassword} onChange={e=>setreenterpassword(e.target.value)} />
           <p style={{color:"red",fontSize:"12px"}}> {errors.reenterpassword}</p>
            </div>

            <div className='phone'>
            <label htmlFor="phone"> phone number: </label>
               
               <input type="number" name="phone" className="login-phone" value={phone} onChange={e=>setphone(e.target.value)}/>
              <p style={{color:"red",fontSize:"12px"}}> {errors.phone}</p>
           <Link className='signin' to="/userlogin" >Already Registered? Sign In </Link>

            </div>
            

            <button className="login-submit" onClick={handleSubmit}>Submit</button>
            </div>
            </div>
            </div>
        </form>
    </div>
  
  )
}

export default Registration