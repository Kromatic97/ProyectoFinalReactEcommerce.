import axios from 'axios'
import React, { useState } from 'react'
import getConfig from '../../utils/getConfig'



const ProductoDescription = ({ productInfo }) => {

const [counter, setCounter] = useState(1)

const handlePlus = () => {
    if(counter + 1 <= productInfo)
    setCounter(counter + 1 )
}
    
    

const handleMinus = () => {
    if(counter - 1 >= 1){
        setCounter(counter - 1 )
    }
}

const handleAddCart = () =>{
     const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'

     const obj = {
        id:productInfo.id,
        quantity:counter
     }
    axios.post(URL, obj, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

}

  return (
    <section className='product-info__gral'>
            <h2 className='product-info__name'>{productInfo?.title}</h2>
            <p className='product-info__description'>{productInfo?.description}</p>
            <div className='product-info__body'>
                <article className='product-info__price'>
                    <h3 className='product-info__price-label'>Precio</h3>
                    <span className='product-info__price-value'>{productInfo?.price}</span>
                </article>

                <article className='product-info__quantity'>
                    <h3 className='product-info__quantity-label'>Quantity</h3>
                    <div className='product-info__quantity-value'>
                        <button className= 'product-info__btn minus' onClick={handleMinus}>-</button>
                        <button className= 'product-info__btn counter'>{counter}</button>
                        <button className= 'product-info__btn plus' onClick={handlePlus}>+</button>
                    </div>

                </article>
                <button onClick={handleAddCart}>Add to Card</button>

            </div>
    </section>
  )
}

export default ProductoDescription