import React from 'react'
import IndividualProduct from './IndividualProduct';
import './Menu.css'

function Product({products}) {

    console.log(products);
    return products.map((individualProduct) => (
      
       <ul className='flex-box'>
          <li className='flex-box2'>
          <IndividualProduct key = {individualProduct.ID} individualProduct={individualProduct} />
          </li>
       </ul>
       
        
  ))
}

export default Product
