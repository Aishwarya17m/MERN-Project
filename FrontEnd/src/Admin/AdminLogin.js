import React, { useState } from 'react'
import axios from 'axios'
import login2 from '../images/clock3.jpg'
import { Link, Navigate } from 'react-router-dom'
import back from '../images/back.png'
function AdminLogin() {


    const [adminname, setadminname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
const [error,seterror]=useState("")




    const handleSubmit = (e) => {
        e.preventDefault()

if(email.length===0 || password.length===0 || adminname.length===0){
    alert("enter all details")
}
else{

        if (email && password && adminname) {

            axios.get("http://localhost:4000/admin")
                .then(res => {
                    res.data.forEach(item=>{
                    if (email === item.email && password===item.password && adminname===item.adminname) {
                       window.localStorage.setItem("adminname", adminname);
                        console.log("admin login done")
                        window.localStorage.setItem("adminloggedin",true)
                        window.location.href = `/Admin/${item._id}`;
                    }
                    else{
                        seterror("Wrong Entry")
                    }
                })

                })

        } else {
            console.log("invalid entry")
        }
    }

    }
    return (
        <div className='login-main-content'>
        <h3 className='login-heading'>Admin Login</h3>
        
        <Link to="/"><img src={back} className="back-arrow" alt="home"/></Link>
        <div className='login-content'>
        <div className='login-left-content'>
            <img src={login2} className="retaillogin-left-image" alt="clock"/>

        </div>
        <div className='login-right-content'>
            {error}
            <form className='login-form'>
                <div className='retailname'>
                    <label htmlFor="retailname">Admin name: </label>
                    <input type="text" name="retailname" className='login-retailname' value={adminname} onChange={e => setadminname(e.target.value)} />
                </div>
                <div className='email'>
                    <label htmlFor="email"> Email ID: </label>
                    <input type="email" name="email" value={email} className="login-email" onChange={e => setemail(e.target.value)} />
                </div>

                <div className='password'>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" value={password} className="login-password" onChange={e => setpassword(e.target.value)} />
                </div>

                <button className='login-submit' onClick={handleSubmit}>Submit</button>
            </form>
            </div>
            </div>
        </div>
        

    )
}


export default AdminLogin;