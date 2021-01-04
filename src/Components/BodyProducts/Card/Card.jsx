import React from 'react';
import {Col,Card,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import {ImgContainer,StyledButton} from '../../../styled/StyledBodyCard'


const CardItem = ({name,img,id,title,...props}) => {


  console.log(props)
  return(
    <Col xs='11' sm="6" md='5' lg={4} style={{padding: '10px'}}>
      <Card style={{height: '100%'}} >
        <ImgContainer>
          <Card.Img variant="top" src={img} />
        </ImgContainer>
        <Card.Body style={{display: 'flex',justifyContent: 'space-between',flexDirection: 'column'}}>
          <div>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {title}
            </Card.Text>
          </div>
          <StyledButton>
           <Button as={Link} to={`/product/${id}`}  variant="primary">view product</Button>
          </StyledButton>     
        </Card.Body>
      </Card>
    </Col>
  )

}

export default CardItem;