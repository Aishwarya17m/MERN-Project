import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function AdminApproval() {
  let  {aid}  =useParams();
  const [prod,setprod]=useState([])
  
  const[status,setstatus]=useState("")
  useEffect(()=>{
   
    axios.get("http://localhost:4000/retailer/approval")
    .then(res=>{
     
     
      setprod(res.data)
    })
   },[]);

   const approvalhandler=(id)=>{
    //e.preventDefault();
    
    axios.put(`http://localhost:4000/retailer/approval/${id}`).then(res=>{
      setstatus(res.data.status="approved")
      axios.post(`http://localhost:4000/product/addProducts/${aid}`,res.data).then(res1=>{
        
       alert("product aproved")
       axios.delete(`http://localhost:4000/retailer/reject/${id}`).then(res=>{
        console.log(res)
        window.location.reload(false)
       })
          
        
        })
      })
    
    
    
       }
    
    
     const rejecthandler=(id)=>{
    axios.delete(`http://localhost:4000/retailer/reject/${id}`).then(res=>{
      alert("Rejected")
      window.location.reload(false)
      
    
    })
     }
    
  
  return (
    <div> <h3 style={{textAlign:"center",marginTop:"20px"}}>Products for Approval</h3>
    <div>
      {
        prod.map(p=>{
          
          return (
            <div key={p._id}>
              <div className='admin-details'>
              <div className='admin-image'>
               <div><img src={p.product_image}/></div>
               </div>
               <div className='admin-description' >
          <div >Product Name: {p.product_name}</div>
          <div >Category: {p.product_category}</div>
          <div>Sub Category: {p.product_subcategory}</div>
          <div>Price: {p.price}</div>
          <div >Description: {p.description}</div>
          <div>Brand: {p.brand}</div>
         
         
          
          <div><button className='accept-admin-item' onClick={()=>approvalhandler(p._id)}>Approve</button>
          <button className='reject-admin-item' onClick={()=>rejecthandler(p._id)}>Reject</button></div>
          </div>
          
          </div>
          </div>
         
          )
    
        }
          )
      }
    </div>
   </div>
  )
}

export default AdminApproval;