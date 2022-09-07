import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Login from './components/routes/Login'
import Purchases from './components/routes/Purchases'
import Header from './components/shared/Header'
import axios from 'axios'
import Cart from './components/shared/Cart'
import ProtectedRoutes from './components/routes/ProtectedRoutes'



function App() {

  // useEffect(() => {
  //   const URL='https://ecommerce-api-react.herokuapp.com/api/v1/users'
          
  //     const obj = {
  //         firstName: 'RogiRomero',
  //         lastName: 'Romero1616',
  //         email: 'rogigen162022@gmail.com',
  //         password: 'Pass55555',
  //         phone: '9998766333',
  //         role: 'admin'
  //     }

  //   axios.post(URL, obj)
  //   .then(res => console.log(res.data))
  //   .catch(err => console.log(err))
 
  // }, [])


  

  return (
    <div className='app'>
      <Header />
          <Routes> 
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/product/:id' element={<ProductDetail />}/> 

            <Route element={<ProtectedRoutes />}>
                <Route path='/purchases' element={<Purchases />}/>
                <Route path='/cart' element={<Cart />}/>
            </Route>

          </Routes>
    </div>
  
  )
}

export default App
