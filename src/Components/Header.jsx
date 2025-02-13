
import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import ppclogo from "../Assets/ppc logo.jpg";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './Header.css'
const Header = () => {
  const [expand, updateExpanded] = useState(false);
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate('/login');
  };
  return (
    <header>
      {/* Top Bar */}
      <div className="text-white py-2" style={{backgroundColor: "#ffc631"}}>
  <Container className='p-0' style={{height:'50px'}}>
    <Row className="d-flex mt-2 align-items-center justify-content-center">
      <Col xs={12} md={6} className="d-flex align-items-center justify-content-center justify-content-md-start">
        <span style={{color: "#001f3f"}}>Need Help?</span>
        <FaPhoneAlt className="mx-2" style={{color: "#001f3f"}}/>
        <span style={{color: "#001f3f"}}>Call: +91 0413-2222244</span>
      </Col>
      <Col xs={12} md={6} className="d-flex align-items-center justify-content-center justify-content-md-end">
        <Button size="sm" className="me-2  weblogin" onClick={handleLoginPage}>Login</Button>
      </Col>
    </Row>
  </Container>
</div>

      {/* Main Navbar */}
      <Navbar style={{backgroundColor:"#001f3f"}} expand="lg">
        <Container style={{height:'60px'}}>
      
          <Navbar.Brand href="/" className="text-danger">
            <img src={ppclogo} alt="Logo" style={{ height: '40px' }} className='rounded-3' />
          </Navbar.Brand>
          <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>         
         <Navbar.Collapse id="basic-navbar-nav">
                          <Link to={'/login'} style={{textDecoration:"none"}} >
          
            <Nav className="me-auto">
              <Nav.Link href="/"style={{color: "white "}}>HOME</Nav.Link>
              <Nav.Link href="/login" style={{color: "white "}}>My Account</Nav.Link>
              <Nav.Link href="/showallproperty"style={{ color: "white "}}>All Property</Nav.Link>
              <Nav.Link href="/mobileviews"style={{ color: "white "}}>Search</Nav.Link>
              <Nav.Link href="/mobileviews"style={{color: "white "}}>Pricing</Nav.Link>
              <Nav.Link href="/mobileviews" style={{color: "white "}}>Bradford</Nav.Link>
            </Nav>
            </Link>
            <Link to="/login">
  <Button style={{ backgroundColor: "#ffc631", color: "#001f3f", marginRight: "5px", border:'none' }}>Add Listing</Button>
</Link>
            {/* <Button style={{backgroundColor: "#ffc631", color: "#001f3f ", marginRight: "5px"}} className="">Add Listing</Button> */}
            <Link to="/login">
            <Button style={{backgroundColor: "#ffc631", color: "#001f3f ",border:'none'}} className="">Buyer assistance</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;