import React, { useState } from 'react'
import axios from 'axios'
import './Style/home.css'
import login2 from '../images/login2.jpg'
import { Link } from 'react-router-dom'
import back from '../images/back.png'
function Login() {



    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [errors,seterrors]=useState("");
let id;
let success=false;



    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password

        };
        
      
      
    if(email.length===0 || password.length===0){
        alert("enter all details")
    }
        else{
        axios.get("http://localhost:4000/User").then(  resp => {
            resp.data.forEach(item => {
                if (email === item.email) {
                    window.localStorage.setItem("username",item.username);
                    
                    
                        id=item._id
                   
                    console.log(item._id)
    
                    
                   
               }
            }
               
            )
     }
        )
    
        
            
        

                    if (email && password) {
                        
                        axios.post("http://localhost:4000/User/UserLogin", data)
                            .then(res => {
                               
                               window.location.href=`/home/${id}`;
                               window.localStorage.setItem("loggedin",true);
                              

                            })
                            .catch(err=>{
                               console.log(err.response.data)
                               alert("invalid entry")
                            })

                    } else {
                        console.log("invalid user")
            

                }
            }
        }
        
        
            
            
            
        
        
            
                
        
    
    
    
        




    return (
        <div className='login-main-content'>
            <h3 className='login-heading'>USER LOGIN</h3>
            <Link to="/"><img src={back} className="back-arrow" alt="home"/></Link>
            <div className='login-content'>
            <div className='login-left-content'>
                <img src={login2} className="login-left-image" alt="clock"/>

            </div>
            <div className='login-right-content'>
            <form className='login-form' >
                <div className='email'>
                    <label htmlFor="email"> Email Id: </label>
                    <input type="email" name="email" className="login-email" value={email} onChange={e => {setemail(e.target.value)}} />
                
              
                </div>

                <div className='password'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password"className='login-password' value={password} onChange={e => setpassword(e.target.value)} />
                <Link to="/forgotpassword" className='forgot-pass'>Forgot password?</Link>
                </div>
               
                <button className='login-submit' onClick={handleSubmit}>Submit</button>
               
                <Link className='signup' to ="/Registration">Sign Up</Link>
               
            </form>
            
            </div>
            </div>
        </div>

    )
}


export default Login;