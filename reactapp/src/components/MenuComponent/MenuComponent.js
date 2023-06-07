import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import Product from './Product';
import './Menu.css'

function MenuComponent() {
  //state of products
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const products = await db.collection('Products').get();
    const productsArray = [];
    for (var snap of products.docs){
      var data = snap.data();
      data.ID= snap.id;
      productsArray.push({
        ...data
      })
      if(productsArray.length === products.docs.length){
        setProducts(productsArray);
      }
    }
  }

  useEffect(() => {
    getProducts();
  },[])

 
  return (
    <>
    {products.length >0 && (
      <div className='container-fluid '>
        <h1 className='text-center '>Products</h1>
        <div className='products-box'>
            <Product products={products}/>
        </div>
      </div>
    )}
    {products.length < 1 && (
      <div className='container-fluid'>Please wait...</div>
    )}
    </>
  )
}

export default MenuComponent
