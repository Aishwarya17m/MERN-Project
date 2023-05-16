import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import back from '../images/back.png'
import './Style/Userpage.css'
function Product() {
    let [prod, setproduct] = useState([]);
    let { uid, pid } = useParams();
 
    const [count, setcount] = useState(1);


    useEffect(() => {
        axios.get(`http://localhost:4000/product/product/${pid}`).then((res) => {

            setproduct([res.data]);

        })
        
       


    }, [])


    const Addquantity = () => {
        setcount(count + 1)
    }
    const deletequantity = () => {
        if (count > 1) {
            setcount(count - 1)
        }
    }
    const Addtowishlist=(pid)=>{
        const wishdata={
            User:uid,
            Product:pid
        }
        axios.get("http://localhost:4000/wishlist/AllWishlists").then((res) => {  
            
            let wish=res.data.find((w)=> (w.User._id===uid && w.Product._id===pid))

        if(wish){
           
            alert("item already present in wishlist")
            
        }
        else{
                  
                            axios.post(`http://localhost:4000/wishlist/${uid}/${pid}`, wishdata).then((res1) => {
                               
                                alert("item added to wishlist")
                               
                                return;
        
                            })
                           
        }
                        
                        
        
        
        
                    
                })
    }
    const AddtoCart = (pid) => {

        const data = {
            User: uid,
            Product: pid,
            quantity: count


        }


        axios.get("http://localhost:4000/cart/cartitems").then((res) => {

           let check=res.data.find((u)=>(u.User._id===uid && u.Product._id===pid));
         
          
           


if(check){
    alert("item already present in the cart")

    
}
else{
          
                    axios.post("http://localhost:4000/cart/addtocart", data).then((res1) => {
                      
                        alert("cart item added")
                        //setcart(res.data.length+1)
                        window.location.reload(false)
                        
                   
                        return;

                    })
                   
}
                
                



            
        })








    }
    return (
        <div>
            <Navbar />
            <div className='order-details-div'><Link to={`/home/${uid}`} ><img src={back}  className="back-arrow" alt="home"/></Link>
<span className='order-details-heading'>Product Details</span></div>
            <div>
           
                {


                }
                <div className='product-single-view'>
                    


                    {
                        prod.map(p => {
                            return (
                               
                                <div key={p._id} >
                                    <div className='product-details-view'>
                                    <img alt="product-img" className="proimage-view" src={p.product_image} />
                                   
                                   
                                    <div className='description-view'>
                                    <div style={{fontWeight:"bold",fontSize:"25px",color:"blue"}}> {p.brand}</div>
                                    <div style={{fontWeight:"bold",fontSize:"25px",color:"blue"}}> {p.product_name}</div>
                                             
                                    <div style={{fontWeight:"bold",fontSize:"20px"}}>Description:  </div>
                                    <div style={{fontSize:"18px"}}>{p.product_subcategory}</div>
                                        <div style={{fontSize:"18px"}}>{p.description}</div>
                                        
                                    <div style={{color:"red",fontWeight:"bold",fontSize:"25px"}}>&#8377; {p.price}</div>
                                    <div>
                                    <button className='addtocart' onClick={() => AddtoCart(p._id)}>Add To Cart</button>
                                    <button className='addtowishlist' onClick={()=>Addtowishlist(p._id)}>Add to Wishlist</button>
                                    Quantity <button className='iquantity' onClick={Addquantity}>+  </button> 
                                    {count}
                                    <button onClick={deletequantity} className="dquantity">- </button>
                                    </div>
                                   
                                    </div>

                                </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Product