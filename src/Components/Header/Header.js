import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/heart-fav.png";
import "./Header.css";
const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Health PRO
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar fixed="top" />
          <Navbar.Collapse className="justify-content-end nav-ber-text">
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item className="pe-3">
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="pe-3">
                <Nav.Link as={Link} to="/tips">
                  Health Tips
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="pe-3">
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="pe-3">
                <Nav.Link as={Link} to="/about">
                  Log In
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
