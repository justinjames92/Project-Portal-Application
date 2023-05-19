// @flow strict

import * as React from "react";
import "../App.css";
import Navbar from "react-bootstrap/Navbar";

function NavbarMenu({ homeWindow }) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <container-fluid>
          <Navbar.Brand onClick={homeWindow} style={{ cursor: "pointer" }}>
            WEB422-Project Portal
          </Navbar.Brand>
        </container-fluid>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
