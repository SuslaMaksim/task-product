import React from 'react';
import Card from './Card/Card';
import {Container} from 'react-bootstrap';
import {RowContainer} from '../../styled/StyledBodyCard'

let  BodyProducts = ({productsData}) => (
  
    <Container fluid >
      <RowContainer>    
          {productsData && productsData.map(product => <Card key = {product.id}/>)}
      </RowContainer>
    </Container> 

  );


export default BodyProducts;
