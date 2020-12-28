import React from 'react';
import styled from 'styled-components';
import {Container} from 'react-bootstrap';

const Wrap = styled(Container)`
display: flex;
justify-content: center;
`

const Auth = (props)=>{


  return(
    <Wrap fluid >
     <h2>Auth will Be here</h2>
    </Wrap>
  )
}

export default Auth;