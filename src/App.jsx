import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'



function App() {

  useEffect(() => {
    const URL='https://ecommerce-api-react.herokuapp.com/api/v1/users'
          
      const obj = {
          firstName: "Rogi16",
          lastName: "Romero16",
          email: "rogigen16@gmail.com",
          password: "pass55555",
          phone: "9998766333",
          role: "admin"
      }

    axios.post(URL, obj)
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
 
  }, [])
  

  return (
    <div className='app'>
      <Header />
          <Routes> 
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/purchases' element={<Purchases />}/>
            <Route path='/product/:id' element={<ProductDetail />}/> 
          </Routes>
    </div>
  
  )
}

export default App
