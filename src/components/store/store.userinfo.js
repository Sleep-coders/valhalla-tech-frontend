import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class StoreUserInfo extends Component {
  render() {
    return (
      <Col>
        <Row>
          <Col className="d-flex flex-row align-items-center">
            <i className="bi bi-person-circle fs-1"></i>
            <h4 className="m-0 mx-3">Osaid Alhomedy</h4>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex flex-row align-items-center">
            <i class="bi bi-wallet fs-1"></i>
            <h4 className="m-0 mx-3">100JD</h4>
          </Col>
          <Col className="d-flex flex-row align-items-center">
            <i class="bi bi-cart4 fs-1"></i>
            <h4 className="text m-0">x 3</h4>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default StoreUserInfo;
