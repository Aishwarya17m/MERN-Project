import {React,useState}  from 'react'
import axios from 'axios'
import './Style/home.css'
import login2 from '../images/login2.jpg'
import { Link } from 'react-router-dom'
function Forgotpassword() {


    const [email, setemail] = useState("")
    const [newpassword, setnewpassword] = useState("")
    // const [errors,seterrors]=useState("");





    const handleSubmit = (e) => {
        e.preventDefault();
       let data={
        email,
        password:newpassword
       }
      
    if(email.length===0 && newpassword.length===0){
        alert("enter all details")
    }
        else{
        axios.get("http://localhost:4000/User").then(resp => {
            resp.data.forEach(item => {
                if (email === item.email) {
                  
                    if (email && newpassword) {
                            console.log(data)
                            axios.put(`http://localhost:4000/User/resetpass/${item._id}`,data).then(res =>{ 
                                alert("password reset done!")
                            window.location.href="/Userlogin"
                    }

                            ).catch(err=>{
                                console.log(err)
                            })

                    } else {
                        console.log("invalid user")
            

                }
            }
            });
                
            })
    
    
        }
        }




    return (
        <div className='login-main-content'>
            <h3 className='login-heading'>LOGIN</h3>
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
                    <input type="password" name="password"className='login-password' value={newpassword} onChange={e => setnewpassword(e.target.value)} />
                
                </div>
               
                <button className='login-submit' onClick={handleSubmit}>Reset</button>
                <Link className='signup' to ='/Userlogin'>Login</Link>
               
            </form>
            
            </div>
            </div>
        </div>

    )
}


export default Forgotpassword;