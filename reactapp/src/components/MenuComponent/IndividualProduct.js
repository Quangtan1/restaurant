import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Menu.css'


function individualProduct({individualProduct}) {
    console.log(individualProduct);
  return (   
    <div >
    <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={individualProduct.url} alt='product-img' className='img-box' />
      <Card.Body>
        <Card.Title>{individualProduct.title}</Card.Title>
        <Card.Text>
        {individualProduct.description}
        </Card.Text>
        <Card.Text>${individualProduct.price}</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default individualProduct
