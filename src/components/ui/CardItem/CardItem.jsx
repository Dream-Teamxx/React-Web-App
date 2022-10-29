import React from 'react';

// Boot
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// Style
import './CardItem.css'

const CardItem = () => {
  return ( 
    <>
      <Card className='card-item'>
        <Card.Header className='text-light' as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title className='text-light'>Special title treatment</Card.Title>
          <Card.Text className='text-light'>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
   );
}
 
export default CardItem;