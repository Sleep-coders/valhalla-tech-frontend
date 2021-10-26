import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminAddEntity from "./admin.addEntity";

export class AdminMainPage extends Component {
  render() {
    return (
      <Row className="" style={{ height: "90vh" }}>
        {/* <Col xs={1} className="bg-secondary vh-100"></Col> */}

        <Col xs={8}>
          <Row className="bg-information" style={{ height: "30vh" }}></Row>
          <Row className="bg-warning" style={{ height: "60vh" }}>
            <Col>
              <AdminAddEntity />
            </Col>
          </Row>
        </Col>

        <Col xs={4}>
          <Row className="bg-danger" style={{ height: "90vh" }}></Row>
        </Col>
      </Row>
    );
  }
}

export default AdminMainPage;
