import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navigation.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" className="me-auto nav-style">
        <Container>
            <Navbar.Brand className="nav-text"  href="#home">Stephen Curry</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><Link className="nav-text" to="/">Home</Link></Nav.Link>
                <Nav.Link><Link className="nav-text" to="/Projects">Projects</Link></Nav.Link>
                <Nav.Link><Link className="nav-text" to="/redesign">Redesign</Link></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Navigation;