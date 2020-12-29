import React from 'react';
import {Nav,Navbar}from 'react-bootstrap'
import {Link} from 'react-router-dom';
import {Navigation} from './StyledHeader'




const Header = (props)=>{

  return(
    <>
      <Navigation className="navbar justify-content-between" bg="dark" variant="dark" >
          <Navbar.Brand  >Product Shop</Navbar.Brand>
          <Nav>
           <Nav.Link as={Link} to='/'  >Main</Nav.Link>
           <Nav.Link as={Link} to='/auth' >Auth</Nav.Link>
         </Nav>          
      </Navigation>
    </>
  )
}

export default Header;
