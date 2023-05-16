import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Style/modal.css'
function ProductModalStatus() {
    const {uid}=useParams()
    const [modal, setModal] = useState(false);
    const [details,setdetails]=useState([])

    const toggleModal = () => {
      setModal(!modal);
      axios.get(`http://localhost:4000/cart/cartitems/${uid}`).then((res)=>{
        res.data.forEach((p)=>{
       
            if(p.User._id===uid){
            setdetails((prev) => [...prev, p])
            }
           
           
          }
        
        )})
    }
  
    if(modal) {
      document.body.classList.add('active-modal')
     
    } else {
      document.body.classList.remove('active-modal')
    }
  
    // useEffect(()=>{
    //     axios.get(`http://localhost:4000/User/users/${uid}`).then((res)=>{
    //         setdetails(res.data)

    //     })
    // },[])
    return (
        <>
        
         <button onClick={toggleModal} className="btn-modal"> 
      My Product Details
         </button> 
  
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2></h2>
              <div>
                {
                
                
                       
                    

                   details.map(p => {
                    return(
                        <div key={p._id}>
                            <div> <h4 style={{color:"black"}}>Name:</h4> {p.Product.name}</div>
                            <div> <h4 style={{color:"black"}}>Email Id:</h4> </div>
                            <div> <h4 style={{color:"black"}}>Phone Number:</h4> </div>
                        </div>

                    )
                   }
                   )
                }
              </div>
              <button className="close-modal" onClick={toggleModal}>
                X
              </button>
            </div>
          </div>
        )}
          </>
        )
     
}




export default ProductModalStatus