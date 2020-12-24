import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavLink({ activePage, setActivePage, pageId, pageName }) {
  const clickHandler = () => {
    setActivePage(pageId);
  };

  return (
    <Nav.Link
      as={Link}
      to={"/" + pageId}
      className={`${activePage === pageId ? "selected" : ""}`}
      onClick={clickHandler}
    >
      {pageName}
    </Nav.Link>
  );
}

export default NavLink;
