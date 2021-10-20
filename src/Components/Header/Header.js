import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  //   const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home"><img
          alt=""
          src="../../Images/heart-fav.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />Health PRO</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="">
              Services
            </Nav.Link>
            {/* <Nav.Link as={Link} to="">
              Experts
            </Nav.Link>
            {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )} */}
            {/* <Navbar.Text>
              <a href="#login">
                <i class="far fa-user-circle"></i>
                {user?.displayName}
              </a>
            </Navbar.Text> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
