import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarMenu from "../components/NavbarMenu";
import SidebarMenu from "../components/SidebarMenu";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import MainRouter from "../components/ReactRouter/MainRouter";
import { useState } from "react";

function App() {
  const [selectedItem, setSelectedItem] = useState("");
  const navigate = useNavigate();
  const mainWindow = () => {
    navigate("/");
    setSelectedItem("");
  };
  const handleSelect = (menu) => {
    navigate(menu);
    setSelectedItem(menu);
  };

  return (
    <div className="App">
      <NavbarMenu homeWindow={mainWindow} />
      <Row>
        <Col md={3}>
          <SidebarMenu select={selectedItem} handle={handleSelect} />
        </Col>
        <Col md={9}>
          <MainRouter />
        </Col>
      </Row>
    </div>
  );
}

export default App;
