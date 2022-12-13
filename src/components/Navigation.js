import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navigation.css";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" className="me-auto nav-style">
        <Container>
            <Navbar.Brand className="nav-text"  href="/">Steph Curry's Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                {/* <Nav.Link><Link className="nav-text" to="/Projects">Projects</Link></Nav.Link>
                <Nav.Link><Link className="nav-text" to="/redesign">Redesign</Link></Nav.Link> */}
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/Projects#personas">Personas & Storyboarding</NavDropdown.Item>
                  <NavDropdown.Item href="/Projects#redesign">Responsive Redesign</NavDropdown.Item>
                  <NavDropdown.Item href="/Projects#iterative">Iterative Prototyping</NavDropdown.Item>
                  <NavDropdown.Item href="/Projects#development">React Development</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;