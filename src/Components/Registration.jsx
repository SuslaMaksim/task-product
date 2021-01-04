import React from 'react';
import {Form,Button} from 'react-bootstrap';
import {FormContainer,Wrap} from '../styled/StyledAuth';


const Registrarion = (props) => (
    <Wrap fluid > 
      <FormContainer>
          <h4>Registrarion </h4>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control autoComplete="newEmail" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control autoComplete="new-password" type="password" placeholder="Password" />
          </Form.Group>    
          <Form.Group controlId="formBasicPasswordRepeat">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control autoComplete="new-password" type="password" placeholder="Password" />
          </Form.Group>  
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </FormContainer>
    </Wrap>

  )


export default Registrarion;