import axios from 'axios'
import React, { useEffect, useState } from 'react'
import getConfig from '../../utils/getConfig'
import PurchasesCard from '../purchases/PurchasesCard'



const Purchases = () => {
  const [purchases, setPurchases] = useState()

  useEffect(() => {
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
    axios.get(URL, getConfig())
    .then(res => setPurchases(res.data.data.purchases))
    .catch(err => console.log(err))
  }, [])
  
  console.log(purchases);

  return (
    <div>
      <h2>Purchase</h2>
    <article className='purchase'>
      
     {
        purchases?.map(purchase => (
          <PurchasesCard 
          key={purchase.id}
          purchase={purchase}
          />
          
        ))
      }
      
    </article>

    </div>
      
      
  )
}

export default Purchases