import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductoDescription from '../productDetail/ProductoDescription'


const ProductDetail = () => {

  const [productInfo, setProductInfo] = useState()
  const {id}= useParams()
  
  useEffect(() => {
    const URL = `https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
  axios.get(URL)
  .then(res => setProductInfo(res.data.data.product))
  .catch(err => console.log(err))

  }, [])

  console.log(productInfo)  


  return (
    <div>
      <ProductoDescription 
      productInfo = {productInfo}
      />
      
    </div>
  )
}

export default ProductDetail