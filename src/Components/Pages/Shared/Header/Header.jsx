import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegUserCircle} from 'react-icons/fa';
import './Header.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="md"  className="navbar">
        <Container>
            <h3 className="nav-title"><Link to="/" className="text-dark">Deshi Bhozon</Link></h3>
            
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <Nav.Link to="/Blog">Blog</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              <Nav.Link href="#deets">
                <FaRegUserCircle className="fs-1"/>
              </Nav.Link>
              
              <Link to='/login'><Button variant="success">Login</Button></Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
