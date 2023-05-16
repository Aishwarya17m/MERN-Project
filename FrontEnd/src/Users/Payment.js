import React, { useEffect, useState } from 'react'

import 'react-credit-cards-2/es/styles-compiled.css';
import "rsuite/dist/rsuite.min.css";
import  { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Navbar from './Navbar';
import axios from 'axios';
import back from '../images/back.png'
import {  Link, useLocation, useParams } from 'react-router-dom';
import PaymentForm from './PaymentForm';
const public_key="pk_test_51JmUuGSEXh4QGadB33rp9alp2frWWxoA0kwMkw8SDsI1Ibju7WPIM19H4xPO5AKgSy1gLLq6gEV8aC01HZ6LmIQl00xd9GKNpd"

const stripeTestPromise=loadStripe(public_key)
function Payment() {
  
  const {uid}=useParams();
  let datep=new Date();
 let date=new Date();
 let expdate=date.setDate(date.getDate()+5)
    const [user,setuser]=useState([])
    const [prod,setprod]=useState([])
    const [card,setcard]=useState(false)
    const [paytype,setpaytype]=useState("")
    const [address,setaddress]=useState("")
    const[products,setproducts]=useState([])
  
  
    let run=false;
const location=useLocation();

  
useEffect(()=>{
    if(!run){   
      fetchdata();
     run=true;
 }
 


    },[uid])
const fetchdata=()=>{
  axios.get(`http://localhost:4000/User/users/${uid}`).then((res)=>{
  setuser([res.data])
})

axios.get(`http://localhost:4000/cart/cartuser/${uid}`).then((res) => {
           
res.data.forEach((p)=>{
   
    
    setprod((prev) => [...prev, p])
    
    
    
   
   
  }

)
})
}
const paymenttype=(val)=>{
  
  console.log(val)
if(val==="DebitCard"){
  setcard(true)
  setpaytype(val)

}
else if(val==="Cash"){
setpaytype(val)
setcard(false)
}
else if(val==="none"){
  setpaytype(val)
}

}
const orderproduct=()=>{


  const data={
    paymenttype:paytype,
    User:uid,
    orderprice:location.state.items,
    purchasedate:new Date(datep).toLocaleDateString(),
        expectdelivery:new Date(expdate).toLocaleDateString(),
        address:address,
        Product:JSON.parse(JSON.stringify(prod))


       
  }
  
  if(paytype.length===0 || address.length===0)
{
  alert("enter all  details")
}
else{
  axios.post(`http://localhost:4000/order/${uid}`,data).then(res=>{

  axios.get(`http://localhost:4000/order/orderuser/${uid}`).then((res) => {
              
  
      
        alert("Order placed!!")
  
       
       
      }
      
     )
  


    
})

  .catch(err=>{
    console.log("error")
  })
  
}
}
  return (
    <div className='payment-content'>
      <Navbar products={prod.quantity}/>
      <div className='order-details-div'><Link to={`/home/${uid}`} ><img src={back} className="back-arrow" alt="home"/></Link>
<span className='order-details-heading'>Payment</span></div>
      <div className='payment-details'>
     
{
  user.map(p=>{
    return(<ul key={p._id} className="payment-product-details">
    <li>Name : {p.username}</li>
<li>Phone number : {p.phone}</li>
<li>Address : </li>
<li><textarea placeholder='enter address' className="order-address" value={address} onChange={e=>setaddress(e.target.value)}></textarea></li>
</ul>)})}

       

    {
      prod.map(p=>{
        return(
          <ul key={p._id} className="payment-product-details">
            <li><span > &#x25BA; Product Name : </span>{p.Product.product_name}</li>
            <li><span >Product Quantity :</span> {p.quantity}</li>
            <li><span >Product Price : </span>{p.Product.price}</li>
           

          </ul>
        )
      })
    }
    <ul className="payment-product-details">
     <li>Total Price : <span style={{color:"red"}}>&#8377; {location.state.items}</span></li>
     </ul>
  
  <div className='payment-type'>Payment Type : <select onChange={e=>paymenttype(e.target.value)} value={paytype} className="payment-type-select">
    <option value="none">Select an Option</option>
      <option value="DebitCard">Debit card</option>
      <option value="Cash">Cash</option>
    </select>
    </div>
   

    {
      card?<div className='payment-details'> <div className='debit-card-heading'>debit card details</div>
         <Elements stripe={stripeTestPromise} >
          <PaymentForm totalamount={location.state.items} handleclick={orderproduct}/>
         </Elements>
      </div>:  <button onClick={orderproduct} className="order-button">Order</button>
    }
  

    </div>

    </div>
  )
}


export default Payment