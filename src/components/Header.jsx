import React, { Component } from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/OpulIcon.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{" "}
            pul&nbsp;
          </Navbar.Brand>
          {/* //<Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Model&nbsp;</Nav.Link>
              <Nav.Link href="#link">Blog&nbsp;</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
