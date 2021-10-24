import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreUserInfo from "./store.userinfo";
import StoreCategoryFilter from "./store.catagoryFilter";
import StoreProductInfo from "./store.productInfo";
import StoreProductList from "./store.productList";
import Data from "./testing/products.json";
import SingleData from "./testing/singleProduct.json";

class StoreMainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: SingleData,
      showProductInfo: false,
    };
  }

  showProductInfoHandler = () => {};

  render() {
    return (
      <Row className="vh-100">
        <Col xs={1} className="bg-secondary vh-100"></Col>

        <Col xs={8}>
          <Row
            className="border d-flex align-items-center"
            style={{ height: "25vh" }}
          >
            <StoreCategoryFilter />
          </Row>
          <Row className="" style={{ height: "75vh" }}>
            <StoreProductList
              productList={this.state.productList}
              showProductInfoHandler={this.showProductInfoHandler}
            />
          </Row>
        </Col>

        <Col xs={3}>
          <Row className="" style={{ height: "15vh" }}>
            <StoreUserInfo />
          </Row>
          <Row style={{ height: "85vh" }}>
            <StoreProductInfo />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default StoreMainpage;
