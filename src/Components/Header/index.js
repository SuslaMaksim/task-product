import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'




const Header = (props)=>{


  return(
    <>
      <Navbar className="navbar justify-content-between" bg="dark" variant="dark" >
          <Navbar.Brand  >Product Shop</Navbar.Brand>
          <Nav>
           <Nav.Link as={Link} to='/'  >Main</Nav.Link>
           <Nav.Link as={Link} to='/auth' >Auth</Nav.Link>
         </Nav>          
      </Navbar>
    </>
  )
}

export default Header;
