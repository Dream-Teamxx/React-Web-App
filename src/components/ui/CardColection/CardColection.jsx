import React from 'react';
import CardItem from '../CardItem/CardItem';

// Styles

import './CardColection.css'


const CardColection = () => {
  return ( 
    <>
      <div className='card-container'>
        <CardItem title='' subtitle='' description=''/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
      </div>
    </>
   );
}
 
export default CardColection;