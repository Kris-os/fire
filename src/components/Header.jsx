import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import OpulIcon from "../Images/OpulIcon.png";
import * as consts from "../Constants.js";

function Header({ activePage, setActivePage }) {
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
      <Navbar.Collapse className="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <NavLink
              activePage={activePage}
              setActivePage={setActivePage}
              pageId={consts.homePageId}
              pageName="Home"
            />
          </Nav.Item>
          <Nav.Item>
            <NavLink
              activePage={activePage}
              setActivePage={setActivePage}
              pageId={consts.toolkitPageId}
              pageName="Toolkit"
            />
          </Nav.Item>
          <Nav.Item>
            <NavLink
              activePage={activePage}
              setActivePage={setActivePage}
              pageId={consts.aboutPageId}
              pageName="About"
            />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
