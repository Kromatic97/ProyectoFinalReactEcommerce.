import React, { useState } from 'react'

const ProductoDescription = ({ productInfo }) => {

const [counter, setCounter] = useState(1)

const handlePlus = () => {
    if(counter + 1 <= productInfo.stock)
    setCounter(counter + 1 )
}
    
    

const handleMinus = () => {
    if(counter - 1 >= 1){
        setCounter(counter - 1 )
    }
}



  return (
    <section>
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
                        <button onClick={handleMinus}>-</button>
                        <button>{counter}</button>
                        <button onClick={handlePlus}>+</button>
                    </div>

                </article>

            </div>
    </section>
  )
}

export default ProductoDescription