import React from 'react';

// Boot
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Style
import './Form.css'

const LogForm = (props) => {
  return ( 
    <>
      {<div className="form-wrapper">
        <Form className='form-item'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className='text-light'>{props.mail_labe}</Form.Label>
          <Form.Control className='text-light bg-secondary' type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className='text-light'>{props.password_labe}</Form.Label>
          <Form.Control className='text-light bg-secondary' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className='text-light' type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
            </Form>
      </div>}
    </>
   );
}
 
export default LogForm;