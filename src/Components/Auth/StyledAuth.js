import styled from 'styled-components';
import {Form,Container,Button} from 'react-bootstrap';

export const Wrap = styled(Container)`

height: 400px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`


export const FormContainer = styled(Form)`

min-width: 40%;
padding: 15px;
border-radius: 5px;
box-shadow: 2px 2px 5px rgba(154, 147, 140, 0.5), 1px 1px 5px rgba(255, 255, 255, 1);
h4{
   margin-bottom: 30px;
   text-align: center;
   }

p{
  margin-top: 30px;
}
`

export const  ButtonContainer = styled(Button)`
&:focus{
  outline:none;
}
`
