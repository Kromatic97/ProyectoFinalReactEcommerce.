import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import ProductCartInfo from '../cart/ProductCartInfo'

const Cart = () => {

    const [cartProducts, setCartProducts] = useState()

    const getAllProductCart = () => {
        const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/cart'
        axios.get(URL, getConfig())
        .then(res => setCartProducts(res.data.data.cart.products))
        .catch(err => setCartProducts())
    }
    
    useEffect(() => {
        getAllProductCart()
    }, [])

   const handleCheckout = () => {
    const URL= 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const obj = {
        street:"Green St. 1456",
        colony:"Southwest",
        zipCode:12345,
        city:"USA",
        references:"Some references"
    }

    axios.post(URL, obj, getConfig())
    .then(res => {
        console.log(res.data)
        getAllProductCart()
    })
    .catch(err => console.log(err))
   }
    
  return (
    <section className='cart'>
        <h2 className='cart__title'>Cart</h2>

    <div className='cart__container-item'>
        {
            cartProducts?.map(product => (
                <ProductCartInfo 
                key={product.id}
                product={product}
                getAllProductCart={getAllProductCart}/>

            ))
        }
    </div>
    <hr className='cart__hr'></hr>

        <footer className='cart__footer'>
            <span className='cart__total-global'>Total:</span>
            <p className='cart__total-value'>1350</p>
            <button onClick={handleCheckout} className='cart__btn'>Checkout</button>
        </footer>
    </section>
  )
}

export default Cart