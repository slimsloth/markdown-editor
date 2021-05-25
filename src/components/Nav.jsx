import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { BiEdit } from "react-icons/bi";

const NavigationBar = () => {
  return (
    <Container fluid="true">
      <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand>
          <BiEdit className="mr-2" />
          <Link to="/" className="text-light">
            Markdown Editor
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/" className="text-light">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about" className="text-light">
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
