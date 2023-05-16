import React, { useState } from 'react'


import { Link, useParams } from 'react-router-dom'


import Navbar from './Navbar'
import AddProducts from './AddProducts'
import ApprovalProducts from './ApprovalProducts'
import ApprovedProducts from './ApprovedProducts'

window.Buffer = window.Buffer || require("buffer").Buffer;
function RetailHome(props) {
  let { rid } = useParams();

  

  const [approve,setapprove]=useState(false);
  const[approved,setapproved]=useState(false);






 
const approvedProducts=()=>{
setapproved(true);
setapprove(false)
 
}
const approvalforproducts=()=>{
setapprove(true);
setapproved(false);
}
const addProducts=()=>{
  window.location.reload(false);
}




  return (
    <div>
     
        <Navbar/>
  
      <div className='retail-flex'>

      <div className='left-retail-flex'>
        <div style={{margin: "30% 3px 0px 38px"}}>
       
          <button className="approvedProducts" onClick={approvedProducts}>Approved Products</button><br/>
          <button className="approvalproducts" onClick={approvalforproducts}>Products for approval</button>
          <button className="approvalproducts" onClick={addProducts}>Add Product Details  </button>
         
          
      
       </div>
      </div>
      <div className='right-retail-content'>
        {
          approve ? <ApprovalProducts/>:approved?<ApprovedProducts/>:<AddProducts/>
        }
     




    
    </div>
    </div>
    </div>
  )
}

export default RetailHome;