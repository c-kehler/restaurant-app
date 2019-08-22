import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";

const MyNavbar = props => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="navbar-light bg-transparent "
      variant="light"
    >
      <Navbar.Brand>Resturaunt App</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/dashboard/">Dashboard</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/signup">Sign up</Nav.Link>
          <Nav.Link href="/signout" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
