
import  axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function AdminApproved() {
    const {aid}=useParams();
    const [approved,setapproved]=useState([])
    const[approve,setapprove]=useState(false)
    let run=false;
    const fetchdata=()=>{
        axios.get("http://localhost:4000/product/Allproducts").then((res) => {
           
        res.data.forEach((p)=>{
          
            if(p.Admin._id===aid){
              console.log(p)
              setapprove(true)
            setapproved((prev) => [...prev, p])
      
      }}
        )
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
approved.map((u)=>{

return (

  <tr key={u._id}>
    <td>{u.Retailer.retailername}</td>
  <td>{u.product_name}</td>

   <td>{u.product_category}</td>
   <td>{u.product_subcategory}</td>
   <td>{u.brand}</td>
   <td>{u.price}</td>
   <td style={{color:"green"}}>Approved</td>
     
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

export default AdminApproved