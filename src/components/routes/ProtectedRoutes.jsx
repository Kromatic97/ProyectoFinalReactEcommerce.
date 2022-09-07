import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

const isLogged = localStorage.getItem('token')

if (isLogged) {
    return <Outlet />
}else{
    return <Navigate to='/login'/>
}





  return (
    <div>ProtectedRoutes</div>
  )
}

export default ProtectedRoutes