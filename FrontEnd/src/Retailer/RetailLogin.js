import React, { useState } from 'react'
import axios from 'axios'
import login2 from '../images/clock2.jpg'
import './retail.css'
import { Link } from 'react-router-dom'
import back from '../images/back.png'
function RetailLogin() {
   
    const [retailername, setretailname] = useState("")
    const [email, setemail] = useState("")
    const [error,seterror]=useState("")
    const [password, setpassword] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        if (email && password && retailername) {
            axios.get("http://localhost:4000/retailer")
                .then(res => {
                    res.data.forEach(item => {
                        if (email === item.email && password === item.password && retailername === item.retailername) {
                          window.localStorage.setItem("retailname", retailername);
                           window.localStorage.setItem("retailerloggedin",true)
                             window.location.href = `/Retailer/${item._id}`;
                           //navigate(`/Retailer/${item._id}`,{state:{id:item._id}})
                          
                        }
                        else {
                           console.log("wrong entry")
                         
                           
                        }
                    })
                   

                }).catch(err=>{
                    alert("wrong entry")
                    seterror("wrong entry")
                })

        } else {
            alert("invalid entry")
        }

    }
    return (
        <div className='login-main-content'>
        <h3 className='login-heading'>Retailer Login</h3>
        
        <Link to="/"><img src={back} className="back-arrow" alt="home"/></Link>
        <div className='login-content'>
        <div className='login-left-content'>
            <img src={login2} className="retaillogin-left-image" alt="clock"/>

        </div>
        <div className='login-right-content'>
            <form className='login-form'>
                {error}
                <div className='retailname'>
                    <label htmlFor="retailname">Retailer name: </label>
                    <input type="text" name="retailname" className='login-retailname' value={retailername} onChange={e => setretailname(e.target.value)} />
                </div>
                <div className='email'>
                    <label htmlFor="email"> email: </label>
                    <input type="email" name="email" value={email} className="login-email" onChange={e => setemail(e.target.value)} />
                </div>

                <div className='password'>
                    <label htmlFor="password">password: </label>
                    <input type="password" name="password" value={password} className="login-password" onChange={e => setpassword(e.target.value)} />
                </div>

                <button className='login-submit' onClick={handleSubmit}>Submit</button>
            </form>
            </div>
            </div>
        </div>
        

    )
}

export default RetailLogin;