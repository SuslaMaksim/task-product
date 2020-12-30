import React from 'react';
import {Form} from 'react-bootstrap';
import {FormContainer,Wrap,ButtonContainer} from './StyledAuth';
import {Link} from 'react-router-dom'

const Auth = (props)=>{


  return(
    <Wrap fluid >
     <FormContainer>
        <h4>Please Enter your Mail and Password</h4>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control autoComplete="new-email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="AuthformBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control autoComplete="new-password" type="password" placeholder="Password" />
        </Form.Group>    
        <ButtonContainer variant="primary" type="submit">
          Submit
        </ButtonContainer>
        <p> If you dont register please follow to <Link to='/registration'>registration</Link> </p>
    </FormContainer>
    </Wrap>
  )
}

export default Auth;