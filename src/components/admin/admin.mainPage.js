import React, { Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminAddEntity from "./admin.addEntity";
import DatatablePage from "./admin.table";
// import "mdbreact/dist/css/mdb.css";

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
          <Row className="" style={{ height: "90vh" }}>
            <DatatablePage />
            <Form>
              <Form.Group as={Row}>
                <Form.Label className="h5 text-center mb-4">
                  Enter a product ID from above table and choose an action
                </Form.Label>
                <Col xs={8}>
                  <Form.Control
                    type="number"
                    placeholder="Product ID"
                    name="id"
                  />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <Row className="d-flex flex-row align-items-center">
                    <Col className="d-flex justify-content-center align-items-center">
                      <Button variant="danger" type="button">
                        Delete
                      </Button>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                      {" "}
                      <Button variant="success" type="button">
                        Update
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default AdminMainPage;
