import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreCategoryFilter from "./store.catagoryFilter";
import StoreProductInfo from "./store.productInfo";
import StoreProductList from "./store.productList";
import Data from "./testing/products.json";
import SingleData from "./testing/singleProduct.json";
import "./styles/store.mainPage.scss";

class StoreMainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: SingleData,
      showProductInfo: false,
    };
  }

  showProductInfoHandler = () => {};

  filterHandler = (data) => {
    console.log(data);
  };

  clearFilter = () => {
    console.log("cleared");
    this.setState = {
      productList: SingleData,
    };
  };

  render() {
    return (
      <Row className="vh-100 vw-100">
        <Col xs={1} className="bg-secondary vh-100"></Col>

        <Col xs={8}>
          <Row
            className="border d-flex align-items-center"
            style={{ height: "25vh" }}
          >
            <StoreCategoryFilter
              filterHandler={this.filterHandler}
              clearFilter={this.clearFilter}
            />
          </Row>
          <Row className="" style={{ height: "75vh" }}>
            <StoreProductList
              productList={this.state.productList}
              showProductInfoHandler={this.showProductInfoHandler}
            />
          </Row>
        </Col>

        <Col xs={3}>
          <Row style={{ height: "100vh" }}>
            <StoreProductInfo />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default StoreMainpage;
