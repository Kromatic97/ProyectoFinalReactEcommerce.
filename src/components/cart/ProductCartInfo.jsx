import axios from 'axios'
import React from 'react'
import productsSlice from '../../store/slices/products.slice'
import getConfig from '../../utils/getConfig'
import ProductoDescription from '../productDetail/ProductoDescription'

const ProductCartInfo = ({product, getAllProductCart}) => {
const handleDeleteProduct = () => {
  const URL= `https://ecommerce-api-react.herokuapp.com/api/v1/cart/${product.id}`
  axios.delete(URL, getConfig())
  .then(() => getAllProductCart())
  .catch(err => console.log(err))
}

  return (
    <article className='cart__item'>

        <header className='cart__title-product'>
            <h4 className='cart__subtitle'>{product.brand}</h4>
            <h3 className='cart__name'>{product.title}</h3> 
        </header>

        <i onClick={handleDeleteProduct} className="cart__trash fa-regular fa-trash-can"></i>

        <span className='cart__quantity'>Quantity: {product.productsInCart.quantity}</span>

        <footer className='cart__item-footer'>
            <span className='cart__total-label'>Total:</span>
            <p className='cart__total-numbert'>{product.price}</p>
        </footer>

    </article>
  )
}

export default ProductCartInfo