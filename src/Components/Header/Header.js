import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Images/heart-fav.png";
import "./Header.css";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import useAuth from "../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  const { user, logOut } = useAuth();

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
          <Navbar.Collapse className="nav-ber-text">
            <Nav activeKey="/home" className="me-auto">
              <Nav.Item>
                <Nav.Link as={Link} to="/home">
                  Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/tips">
                  Health Tips
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/about">
                  About Us
                </Nav.Link>
              </Nav.Item>
              <Nav.Link as={Link} to="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text>
                <FontAwesomeIcon className="user-icon" icon={faUserCircle} />
                &nbsp; User: &nbsp;
                {user?.displayName}
              </Navbar.Text>

              <Nav.Item className="ms-2">
                {user?.email ? (
                  <Button variant="outline-secondary" onClick={logOut}>
                    Log Out
                  </Button>
                ) : (
                  <Nav.Link as={Link} to="/login">
                    Log In
                  </Nav.Link>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
