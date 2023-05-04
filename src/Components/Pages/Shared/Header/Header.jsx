import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaRegUserCircle} from 'react-icons/fa';
import './Header.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../../Providers.jsx/AuthProviders";

const Header = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleLogout = () => {
      logOut()
      .then()
      .catch(error => console.log(error))
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="md"  className="navbar">
        <Container>
            <h3 className="nav-title"><Link to="/" className="text-dark">Deshi <span className="text-danger">Bhozon</span></Link></h3>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto all-links">
              <Link to='/'>Home</Link>
              <Link to='/blog'>Blog</Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && <Nav.Link href="#deets">
                <FaRegUserCircle className="fs-1"/>
              </Nav.Link>}
                
                {user ?<Button onClick={handleLogout} variant="dark">Logout</Button> :
                <Link to='/login'><Button variant="success">Login</Button></Link>}
              
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
