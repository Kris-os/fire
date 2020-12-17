import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import OpulIcon from "../Images/OpulIcon.png";

function Header() {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      style={{ display: "flex", alignItems: "left" }}
    >
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
        {/* <Navbar.Text style={{ color: "black" }}>
          &nbsp;&nbsp;The Financial Freedom toolkit&nbsp;&nbsp;
        </Navbar.Text> */}

        <Nav className="mr-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/home">
              &nbsp;&nbsp;&nbsp;Home&nbsp;
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/model">
              &nbsp;&nbsp;&nbsp;Model&nbsp;
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">
              &nbsp;&nbsp;&nbsp;About&nbsp;
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
