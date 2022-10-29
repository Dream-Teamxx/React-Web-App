import React from 'react';
import CardColection from '../../ui/CardColection/CardColection';
// Boot
import { Container } from 'react-bootstrap';


//Style
import './About.css'


const About = () => {
  return ( 
    <>
      <div className="about-section">
        <Container>
          <div className="about-container">
            <CardColection/>
          </div>
        </Container>
      </div>
    </>
   );
}
 
export default About;