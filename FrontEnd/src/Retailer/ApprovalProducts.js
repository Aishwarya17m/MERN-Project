import  axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddProducts from './AddProducts';

function ApprovalProducts() {
    const {rid}=useParams();
    const [approval,setapproval]=useState([])
    const[forapprove,setforapprove]=useState(false)
    let run=false;
    const fetchdata=()=>{
        axios.get("http://localhost:4000/retailer/approval").then(res=>{
            res.data.forEach((u)=>{
              if(u.Retailer._id===rid){
                setforapprove(true)
                setapproval((pre)=>[...pre,u])
              }
            })
          })
    }
    useEffect(()=>{
        if(!run){   
            fetchdata();
           run=true;
        }
        
    },[])
  return (
    <div>
      {
         

      
          <div>
             <table  className='approvaltable'>
              <tbody>
  <tr>
    <th>Retailer Name</th>
   <th>Product name</th>
   <th>Product Category</th>
   <th>Sub Category</th>
   <th>Brand</th>
   <th>Price</th>
   <th>Status</th>
  </tr>
            {
approval.map((u)=>{
 
return (
 
   <tr key={u._id}>
    <td>{u.Retailer.retailername}</td>
   <td>{u.product_name}</td>

    <td>{u.product_category}</td>
    <td>{u.product_subcategory}</td>
    <td>{u.brand}</td>
    <td>{u.price}</td>
    <td style={{color:"red"}}>{u.status}</td>
      
   </tr>
 
 
)})

            }
            </tbody>
             </table>
          </div>


      
          }

     
    </div>
  )
}

export default ApprovalProducts