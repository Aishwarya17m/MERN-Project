import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import './Style/cart.css'
import back from '../images/back.png'
function Cart() {
    const {uid}=useParams();
    const navigate=useNavigate();
    const [cart,setcart]=useState([])
    //const [product,setproducts]=useState([])
    const [count,setcount]=useState(0);
    let run=false;
    let [amount,setamount]=useState(0)
   
    const fetchdata=()=>{
        axios.get(`http://localhost:4000/cart/cartuser/${uid}`).then((res) => {
           
        res.data.forEach((p)=>{
            setcart((prev) => [...prev, p])
                setamount(amount+=(p.Product.price*p.quantity))
    }
        )
           
       
        }).catch(err=>{
            console.log("cart is empty")
        })
    
    }
    useEffect(() => {
        if(!run){   
             fetchdata();
            run=true;
        }
        

        
        
         
    


    }, [])
   
const payment=()=>{
    navigate(`/payment/${uid}`,{state:{items:amount}})
}
  
    const deleteitem=(id)=>{
        axios.delete(`http://localhost:4000/cart/cartdel/${id}`).then((res)=>{
            console.log("cart item deleted")
            alert("item deleted")
            window.location.reload(false)
        })
    }
  return (
    <div>
        <Navbar cart={count}/>
        <div className='order-details-div'><Link to={`/home/${uid}`} ><img src={back} className="back-arrow" alt="home"/></Link>
        <span className='order-details-heading'>Cart Details</span></div>
        <div>
           
            {cart.length===0 ? (<p className='wishlist-empty'>Cart is empty  &#128542;</p>
            )
            
                
            :
        
           
            cart.map((pro)=>{
                
                return(
                    <div key={pro._id}>
                        <div className='cart-details'>
                           
                         <div className='cart-image'>
                            <img src={pro.Product.product_image} />
                         </div>
                      
                         <div className='cart-description' >
                         <div style={{fontWeight:"bold",fontSize:"18px"}}>{pro.Product.product_category}</div>
                  <div><h3><Link to={`/${pro.User._id}/${pro.Product._id}`} style={{fontWeight:"bold",fontSize:"25px",textDecoration:"none"}}>{pro.Product.product_name}</Link></h3>
                  </div>
                  {/* <div > <h5>Description: </h5> <p>{pro.Product.description}</p></div> */}
                  <div>Price: {pro.Product.price} </div>
                  <div>Quantity : {pro.quantity}</div>
               
                  <div >Brand : {pro.Product.brand}</div>
               
                  <button className='delete-cart-item' onClick={()=>deleteitem(pro._id)}>Delete item</button>
                 
                  </div>
                  </div>
                 
                 </div>
                    

                )

            })
           }
           
                       
                   
                 
          
        
      
       
        </div>
       {/* <Link className='total-price' to={`/payment/${uid}`}> Payment</Link> */}
       {
        cart.length===0?"": <div><p className='total-price' style={{marginTop:"3%"}}> 
        Total price: &#8377;{amount}
        
       
        </p><button onClick={payment} className="payment-button">Payment</button></div>}
    
       
        
    </div>

  )
}

export default Cart