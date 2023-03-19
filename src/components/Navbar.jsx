// @flow strict

import * as React from "react";
import "../App.css";

import Navbar from "react-bootstrap/Navbar";

function NavbarMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <container-fluid>
          <Navbar.Brand href="#home">WEB422-Project Portal</Navbar.Brand>
        </container-fluid>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
