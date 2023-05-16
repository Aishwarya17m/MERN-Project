import React, { useEffect,  useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Modal from './Modal';
import { Dropdown } from "rsuite/";
import "rsuite/dist/rsuite.min.css";
import axios from 'axios';
function Navbar(props) {

 const {uid}=useParams();
 const navigate=useNavigate()
 const [count,setcount]=useState(0);
   const name= window.localStorage.getItem("username");
   let run=false;
   useEffect(()=>{
    if(!run){   
      fetchdata();
     run=true;
 }},[])
 const fetchdata=()=>{
    axios.get(`http://localhost:4000/cart/cartitems/${uid}`).then((res) => {
    res.data.forEach((p)=>{
        if(p.User._id===uid)
          setcount((count)=>count+1)
    })})}
     
    
 
  const logout=()=>{
   
   
    window.localStorage.clear();
    window.location.href="/Userlogin";
    
 
  }
  const orderdetails=()=>{
    console.log(props.products)
navigate(`/orderdetails/${uid}`,{state:{product:props.products}});
  }

  return (
    <div className='navbar'>
        <div className='navbar-left'>
        TIMECRAFT
        </div>
        <div className='navbar-right'>
<ul>
 
    <li> <Link to ={`/cart/${uid}`}>Cart <span className='cart-count'>{count}</span></Link></li>
    <li>
  
    <Dropdown appearance="default"  title={name} className="dropdown">
    <Dropdown.Item><Modal/></Dropdown.Item><br/>
    <Dropdown.Item as="a" href={`/wishlist/${uid}`} style={{color:"black"}}> WishList</Dropdown.Item><br/>
    <Dropdown.Item onClick={orderdetails}>Order Details</Dropdown.Item><br/>
    <Dropdown.Item onClick={logout}>Log out</Dropdown.Item><br/>
   
  </Dropdown>
 
      
 
    </li>
    </ul>

        </div>
    </div>
  )
}


export default Navbar