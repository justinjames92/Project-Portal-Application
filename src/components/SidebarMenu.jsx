// @flow strict
import * as React from "react";

import "../App.css";
import ListGroup from "react-bootstrap/ListGroup";

function SidebarMenu({ select, handle }) {
  return (
    <ListGroup style={{ cursor: "pointer" }}>
      <ListGroup.Item
        className={select === "Overview" && "mySelection"}
        onClick={() => handle("Overview")}
      >
        Overview
      </ListGroup.Item>
      <ListGroup.Item
        onClick={() => handle("Projects")}
        className={select === "Projects" && "mySelection"}
      >
        Projects
      </ListGroup.Item>
      <ListGroup.Item
        onClick={() => handle("Teams")}
        className={select === "Teams" && "mySelection"}
      >
        Teams
      </ListGroup.Item>
      <ListGroup.Item
        onClick={() => handle("Employees")}
        className={select === "Employees" && "mySelection"}
      >
        Employees
      </ListGroup.Item>
    </ListGroup>
  );
}

export default SidebarMenu;
