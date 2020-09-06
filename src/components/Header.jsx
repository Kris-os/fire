import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import OpulIcon from "../Images/OpulIcon.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={OpulIcon}
              width="140"
              height="70"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          {/* //<Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Model&nbsp;</Nav.Link>
              <Nav.Link href="#link">About&nbsp;</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
