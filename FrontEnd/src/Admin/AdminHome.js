import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

 import './admin.css'
import AdminApproval from './AdminApproval';

import AdminApproved from './AdminApproved';


function AdminHome() {
  const [prod,setprod]=useState([])
  
  
  
  const [approve,setapprove]=useState(false);

 
const approvedProducts=()=>{

setapprove(false)
 
}
const approvalforproducts=()=>{
setapprove(true);

}
   useEffect(()=>{
   
    axios.get("http://localhost:4000/retailer/approval")
    .then(res=>{
     
     
      setprod(res.data)
    })
   },[]);
  
  

  


   
  return (
    <div>
   <Navbar/>
   
   

   <div className='main-admin-content'>
   <div className='admin-left-menu'>

  <div style={{margin: "30% 3px 0px 38px"}}>
 
    <button className="approvedProducts" onClick={approvedProducts}>Approved Products</button><br/>
    <button className="approvalproducts" onClick={approvalforproducts}>Products for approval</button>
   
   
    

 </div>
</div>

  
   <div className='admin-content'>
   
    {
      approve ? <AdminApproval/> :<AdminApproved/>
    }
   
   </div>
    </div>
    </div>
  )
}

export default AdminHome;