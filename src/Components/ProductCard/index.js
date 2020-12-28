import React from 'react';
import {Container } from 'react-bootstrap';
import styled from 'styled-components';

const Wrap  = styled(Container)`
 display: flex;
 justify-content: center;
`;

let  ProductCard = (props)=> {
  return (
    <Wrap fluid >
     <h2>BodyCard</h2>
    </Wrap>
  );
}

export default ProductCard;
