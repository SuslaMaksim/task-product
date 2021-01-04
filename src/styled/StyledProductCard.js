import {Container,Row} from 'react-bootstrap';
import styled from 'styled-components';

export const Wrap  = styled(Container)`
display: flex;
justify-content: center;
.comment-title {
  text-align: center;
  margin-bottom:20px;
}
`;

export const ProductContainer  = styled(Container)`
display: flex;
flex-direction: column;
justify-content: center;
padding: 0px;
max-width: 100%;
h2 {
  text-align: center;
}
p {
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  text-align: justify ;
}
`;

export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f2f4f7;
  overflow: auto;
  max-height: 400px;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 20px;
  h5 {
    text-align: center;
    margin-bottom:20px;
  }
  p {
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  }
  .starContainer {
    float:right;
    display: flex;
    align-item: center;
    padding: 3px;
    margin-left: 10px;

  }
`
export const RowContainer = styled(Row)`
@media(max-width: 992px) {
  flex-direction: column-reverse;
}

`
export const ImgContainer = styled.div`
@media(max-width: 992px) {
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
}

`