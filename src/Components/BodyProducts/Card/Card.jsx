import React from 'react';
import {Col,Card,Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';


const CardItem = (props) => (
  
    <Col xs='11' sm="6" md='4' style={{padding: '10px'}}>
      <Card>
        <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/1859/8979/files/CPI-0158-inline-img-01.jpg?v=1553883913" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {!props.text ? "Some quick example text to build on th the card's content. Some quick example text to build on th the card's content" : props.text }
          </Card.Text>
          <Button as={Link} to='/product/2'  variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>

  )


export default CardItem;