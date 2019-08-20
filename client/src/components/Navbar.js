import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";

const MyNavbar = props => {
  return (
    <Navbar expand={"sm"} bg="dark " variant="dark" className="MyNavbar">
      <Nav className="mr-auto">
        <Navbar.Brand>Resturaunt App</Navbar.Brand>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/dashboard/">Dashboard</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Sign up</Nav.Link>
      </Nav>
    </Navbar>
  );
};



export default MyNavbar;

