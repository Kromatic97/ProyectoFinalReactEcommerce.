import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../../store/slices/products.slice'


const Home = () => {

const dispatch = useDispatch()

useEffect(() => {
dispatch(getAllProducts())
}, [])

const products = useSelector(state => state.products)
console.log(products)

  return (
    <div>Home</div>
  )
}

export default Home