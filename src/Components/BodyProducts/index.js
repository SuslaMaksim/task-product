import React from 'react' ;
import Card from './Card/Card'
import {Container,Row} from 'react-bootstrap';

let  BodyProducts = (props)=> {
  return (
    <Container fluid >
      <Row >
       <Card />
       <Card/>
       <Card/>
       <Card/>
       <Card/>
       <Card/>
      </Row>
    </Container> 
  );
}

export default BodyProducts;
