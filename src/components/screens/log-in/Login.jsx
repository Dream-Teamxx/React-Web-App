import React from 'react';
import { Container } from 'react-bootstrap';
import LogForm from '../../ui/form/Form';
import './Login.css'


const Login = () => {
  return ( 
    <>
      <div className="login-section">
          <Container>
            <LogForm mail_labe='Email address' password_labe='Password'/>
          </Container>
        </div>
    </>
   );
}
 
export default Login;