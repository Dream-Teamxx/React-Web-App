import React from 'react';

// Boot
import { Container } from 'react-bootstrap';
//Components
import CardColection from '../../ui/CardColection/CardColection';
// Style
import './Usefull.css'

const Usefull = () => {
  return ( 
    <>
      <div className="use-seciton">
        <Container>
          <CardColection/>
        </Container>
      </div>
    </>
   );
}
 
export default Usefull;