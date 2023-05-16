import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import back from '../images/back.png'
import './Style/cart.css'
function Wishlist() {
    const {uid}=useParams();
    const [wishlist,setwishlist]=useState([])
   

    let run=false;

    const fetchdata=()=>{
        axios.get(`http://localhost:4000/wishlist/wishlistuser/${uid}`).then((res) => {
          console.log(res.data)
        res.data.forEach((p)=>{
          
           
            setwishlist((prev) => [...prev, p])
            
           
           
        
              
              
                
            
        
    }
        )
           
       
        }).catch(err=>{
            console.log("wishlist is empty")
        })
    
    }
    useEffect(() => {
        if(!run){   
             fetchdata();
            run=true;
        }
        

        
        
         
    


    }, [])
    const deleteitem=(id)=>{
        axios.delete(`http://localhost:4000/wishlist/wishlistdel/${id}`).then((res)=>{
            console.log("wishlist item deleted")
            alert("item deleted")
            window.location.reload(false)
        })
    }
  return (
    <div>
        <Navbar />
        <div className='order-details-div'><Link to={`/home/${uid}`} ><img src={back} className="back-arrow" alt="home"/></Link>
<span className='order-details-heading'>My WishList Items</span></div>
        <div style={{marginTop:"4%"}}>
         
            {wishlist.length===0 ? (<p className='wishlist-empty'>Wish list is Empty &#128533;</p>
            )
            
                
            :
        
           
            wishlist.map((pro)=>{
                
                return(
                    <div key={pro._id}>
                        <div className='cart-details'>
                           
                         <div className='cart-image'>
                            <img src={pro.Product.product_image} alt="product " />
                         </div>
                      
                         <div className='cart-description' >
                         <div style={{fontWeight:"bold",fontSize:"18px"}}>{pro.Product.product_category}</div>
                  <div><Link to={`/${pro.User._id}/${pro.Product._id}`} style={{fontWeight:"bold",fontSize:"25px",textDecoration:"none"}}>{pro.Product.product_name}</Link></div>
                  
                  <div > <h4>Description: </h4>{pro.Product.description}</div>
                  <div>Price: {pro.Product.price} </div>
                 
               
                  <div >Brand: {pro.Product.brand}</div>
               
                  <button className='delete-cart-item' onClick={()=>deleteitem(pro._id)}>Delete item</button>
                 
                  </div>
                  </div>
                 
                 </div>
                    

                )

            })
           }
           
                       
                   
                 
          
        </div>
      
  
    </div>

  )
}

export default Wishlist