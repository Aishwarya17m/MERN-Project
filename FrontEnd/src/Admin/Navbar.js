import React from 'react'
import { Dropdown } from "rsuite/";
import "rsuite/dist/rsuite.min.css";

function Navbar() {
    const name= window.localStorage.getItem("adminname");
    const logout=()=>{
   
      window.localStorage.clear();
        window.location.href="/AdminLogin";
        
     
      }
  return (
    <div className='navbar'>
    <div className='navbar-left'>
    TIMECRAFT
    </div>
    <div className='navbar-retailer-right'>
    <ul>
    <li>
        <Dropdown appearance="default"  title={name.toUpperCase()} className="dropdown">
    <Dropdown.Item onClick={logout}>Log out</Dropdown.Item><br/>
   
  </Dropdown></li>
    </ul>
        </div>
        </div>
  )
}

export default Navbar