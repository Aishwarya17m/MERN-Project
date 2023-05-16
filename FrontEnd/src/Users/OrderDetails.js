import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import back from '../images/back.png'



function OrderDetails() {
    const {uid}=useParams();
   
    const location =useLocation();
    const [user,setuser]=useState([])
    const [order,setorder]=useState([])
    
    let run=false;
   
        useEffect(()=>{
        if(!run){   
          fetchdata();
         run=true;
     }
     
    
    
        },[uid])
    const fetchdata=()=>{
 axios.get(`http://localhost:4000/User/users/${uid}`).then((res)=>{
  setuser([res.data])
    }
 )
    axios.get(`http://localhost:4000/order/orderuser/${uid}`).then((res) => {
               
    res.data.forEach((k)=>{
       
      
        setorder((prev) => [...prev, k])
    
       
       
      }
  
    )})
    
    
    }
   
  return (
    <div>
        <Navbar/>
        <div>
        <div className='order-details-div'><Link to={`/home/${uid}`} ><img src={back} className="back-arrow" alt="home"/></Link>
<span className='order-details-heading'>Order Details</span></div>

<table  className='user-table'>
             <tbody>
               
 <tr>
    <th colSpan="3">User Details</th>
    </tr>
        <tr>
  <th>User Name</th>
  <th>Phone Number</th>
  <th>Email ID</th>
 </tr>
           {
user.map((u)=>{

return (

  <tr key={u._id}>
    <td>{u.username}</td>
  <td>{u.phone}</td>

   <td>{u.email}</td>
     
  </tr>


)})

           }
           </tbody>
            </table>

            <table  className='product-table'>
             <tbody>
               
 <tr>
    <th colSpan="8">Ordered Product Details</th>
    </tr>
        <tr>
            
  <th>Product Name</th>
  <th>Category</th>
  <th>Sub-Category</th>
  <th>Quantity</th>
  <th>Brand</th>
  <th>Price</th>
  <th>Product Image</th>
  <th>Order Id</th>
 </tr>

           {
order.map((u)=>{
 

    for(let i=0;i<u.Product.length;i++){

        return (

            <tr key={u._id}>
              <td>{u.Product[i].Product.product_name}</td>
              <td>{u.Product[i].Product.product_category}</td>
              <td>{u.Product[i].Product.product_subcategory}</td>
               <td>{u.orderprice/u.Product[i].Product.price}</td> 
            
              <td>{u.Product[i].Product.brand}</td>
            
              <td>{u.Product[i].Product.price}</td>
              <td>  <img src={u.Product[i].Product.product_image} className="order-product"/></td>
              <td >{u._id}</td>
            
            
               
            </tr>
 ) }
    

           })}
           </tbody>
            </table>
            <table  className='order-table'>
             <tbody>
               
 <tr>
    <th colSpan="9">Order Details</th>
    </tr>
        <tr>
  <th >Order ID</th>
  <th>Product Name</th>
  <th>Product Brand</th>
  <th>Total Price</th>
  <th>Payment Type</th>
  <th>Purchase Date</th>
  <th>Expected Delivery</th>
  <th> Address</th>
  <th>Status</th>
 </tr>
           {
order.map((u)=>{
    for(let i=0;i<u.Product.length;i++){

return (

  <tr key={u._id}>

    <td >{u._id}</td>
    <td>{u.Product[i].Product.product_name}</td>
    <td>{u.Product[i].Product.brand}</td>
    
  <td>{u.orderprice}</td>
  <td>{u.paymenttype}</td>

   <td>{u.purchasedate}</td>
   <td>{u.expectdelivery}</td>
   <td>{u.address}</td>
   {
   (u.purchasedate===u.expectdelivery)? <td>Delivered</td>:<td>Not Delivered</td>}
     
  </tr>


)}})

           }
           </tbody>
            </table>

            

         
         
    </div>
    </div>
  )
}

export default OrderDetails