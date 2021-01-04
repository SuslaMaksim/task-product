import React,{useState} from 'react';
import {Row,Col,Image,Button } from 'react-bootstrap';
import {Wrap,ProductContainer,CommentsContainer,RowContainer,ImgContainer} from '../../styled/StyledProductCard';
import Card from './Card/Card';
import FormModal from './Card/Modal'


let  ProductCard = (props) => {

  const [show, setShow] = useState(false);

  let onClose = (value)=>{
    setShow(value)
  }

  return (
    <Wrap fluid >
      <FormModal show = {show} onClose = {onClose}/>
      <RowContainer >
          <Col  md={12} lg = {4}>
            <ImgContainer>
              <Image style={{width: '100%'}} src="https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913" rounded />
            </ImgContainer>
           
            <h5 className='comment-title'>Comments</h5>
            <CommentsContainer>
               <Card/>
               <Card/>
               <Card/>
               <Card/>
               <Card/>                             
            </CommentsContainer>
           <Button onClick={()=> onClose(true)}>Add Comment</Button>
          </Col>
          <Col sm={12} md={12} lg={8}>
            <ProductContainer>
              <h2 >Product Title</h2>
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, obcaecati praesentium reprehenderit, iste quam molestias unde nisi non velit mollitia veniam hic optio ratione, dolorem repellat cumque asperiores minima delectus?</p> 
              </div>
            </ProductContainer>
          </Col>    
      </RowContainer>
    </Wrap>
  );
}

export default ProductCard;
