import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './Style/modal.css'
function Modal() {
    const {uid}=useParams()
    const [modal, setModal] = useState(false);
    const [details,setdetails]=useState([])

    const toggleModal = () => {
      setModal(!modal);
      axios.get(`http://localhost:4000/User/users/${uid}`).then((res)=>{
        setdetails([res.data])
    }
      )
    };
  
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
      My Details
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
                            <div> <h4 style={{color:"black"}}>Name:</h4> {p.username}</div>
                            <div> <h4 style={{color:"black"}}>Email Id:</h4> {p.email}</div>
                            <div> <h4 style={{color:"black"}}>Phone Number:</h4> {p.phone}</div>
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


export default Modal;