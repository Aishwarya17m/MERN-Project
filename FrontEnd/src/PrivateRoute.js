import { Navigate,Outlet} from "react-router-dom";

import React from 'react'

function PrivateRoute() {
    let auth={'token':true}
  return (
   auth.token?<Outlet/>:<Navigate to ="/"/>
  )
}

export default PrivateRoute