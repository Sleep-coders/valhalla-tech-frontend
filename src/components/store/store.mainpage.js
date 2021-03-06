import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreCategoryFilter from "./store.catagoryFilter";
import StoreProductInfo from "./store.productInfo";
import StoreProductList from "./store.productList";
import "./styles/store.mainPage.scss";
import authHeader from "../../services/auth-header";
import axios from "axios";
class StoreMainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      showProductInfo: false,
      fullWidth: 12,
      collapsed: 0,
    };
  }
  componentDidMount = () => {
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/products/all`,
      headers: authHeader(),
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({
          productList: response.data,
        });
        console.log(response.data);
        console.log(this.state.productList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showProductInfoHandler = (cardData) => {
    this.setState({
      sideBarProductObj: cardData,
      fullWidth: 9,
      collapsed: 3,
    });
  };

  // sendDatatoSidebar = () => {
  //   const cardObj = {
  //     id: this.state.id,
  //     name: this.state.name,
  //     image: this.state.image,
  //     price: this.state.price,
  //   };

  //   return cardObj;
  // };

  filterHandler = async (getData, pathVariable) => {
    // console.log(getData);

    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/products/filter/${pathVariable}`,
      headers: authHeader(),
      params: getData,
    };

    await axios
      .request(options)
      .then((response) => {
        this.setState({
          productList: response.data,
        });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  clearFilter = () => {
    console.log("cleared");
    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/products/all`,
      headers: authHeader(),
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({
          productList: response.data,
        });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Row className="vh-100" style={{ width: "98vw", marginTop: "2%" }}>
        {/* <Col xs={1} className="bg-secondary vh-100"></Col> */}

        <Col xs={this.state.fullWidth}>
          <Row
            className="border d-flex align-items-center"
            style={{ height: "25vh" }}
          >
            <StoreCategoryFilter
              filterHandler={this.filterHandler}
              clearFilter={this.clearFilter}
              style={{ position: "absolute" }}
              showProductInfoHandler={this.showProductInfoHandler}
            />
          </Row>
          <Row className="" style={{ height: "75vh" }}>
            <StoreProductList
              productList={this.state.productList}
              showProductInfoHandler={this.showProductInfoHandler}
            />
          </Row>
        </Col>

        <Col xs={this.state.collapsed}>
          <Row style={{ height: "100vh" }}>
            <StoreProductInfo product={this.state.sideBarProductObj} />
          </Row>
        </Col>
      </Row>
    );
  }
}

export default StoreMainpage;
