import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchasesCard = ({purchase}) => {


  return (
    <div className='card-purchase-total'>

    <article className='card-purchase'>
      <h3 className='card-purchase__date'>Fecha: {purchase.createdAt}</h3>
      <ul className='card-purchase__body'>
        {
          purchase.cart.products.map(product => (
            <ProductPurchase
              key={product.id}
              product={product}
            />
          ))
        }
      </ul>
      <button className='card-purchase-delete'>Delete</button>
    </article>

    </div>

  )
}

export default PurchasesCard