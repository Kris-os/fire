import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import OpulIcon from "../Images/OpulIcon.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <img
              alt=""
              src={OpulIcon}
              width="140"
              height="70"
              className="d-inline-block align-top"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* <Navbar.Text>&nbsp;&nbsp;The Financial Freedom toolkit</Navbar.Text> */}

          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/model">
              &nbsp;&nbsp;&nbsp;Model&nbsp;
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              &nbsp;&nbsp;&nbsp;About&nbsp;
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
