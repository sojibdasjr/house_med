import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {

 const {user, logOut} = useAuth()
    return (
      <div className="">
        <Navbar
          bg="dark"
          variant="dark"
          fixed="top"
          collapseOnSelect
          expand="lg"
        >
          <Container>
            <Navbar.Brand  as = { Link } to="/home">
            HOUSE <span style={{ color: "orange" }}>MED</span>{" "}
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end" >
              <Nav className="me-auto">
                <Nav.Link as={ Link } to ="/home">Home</Nav.Link>
                <Nav.Link as={ Link } to ="/doctors">Doctors</Nav.Link>
                <Nav.Link as={ Link } to ="/services">Services</Nav.Link>
                <Nav.Link as={ Link } to ="/shop">Shop</Nav.Link>
                <Nav.Link as={ Link } to ="/about">About us</Nav.Link>
                <Nav.Link as={ Link } to ="/contact">Contact us</Nav.Link>
              </Nav>
              
              { user.email ? 
              <Link to =""><button onClick={logOut} className="btn btn btn-danger">LogOut</button></Link>
              :
                <Link to ="/login"><button className="btn btn btn-danger">Login</button></Link>
              }
              <Navbar.Text>
                Signed in as: { user.email && <span style={{color:"white"}}>{user.displayName}</span>}
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </div>
    );
};

export default Header;