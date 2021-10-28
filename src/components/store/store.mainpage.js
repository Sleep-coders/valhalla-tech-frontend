import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreCategoryFilter from "./store.catagoryFilter";
import StoreProductInfo from "./store.productInfo";
import StoreProductList from "./store.productList";
import Data from "./testing/products.json";
import SingleData from "./testing/singleProduct.json";
import "./styles/store.mainPage.scss";
import authHeader from "../../services/auth-header";
import axios from "axios";
class StoreMainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      showProductInfo: false,
      id: -1,
      name:"",
      image:"",
      price:0,
    };
  }
   componentDidMount = ()=>{
    const updatedData = this.state.productList;
    const options = {
      method: "GET",
      url: `http://localhost:8080/products/all`,
      headers: authHeader(),
    };
    axios
      .request(options)
      .then((response) => {
             this.setState({
        productList: response.data

      });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showProductInfoHandler = (cardData) => {
    this.setState({
        id: cardData.id,
        name: cardData.name,
        image: cardData.image,
        price:cardData.price
    })

  };

  sendDatatoSidebar= ()=>{
    const cardObj = {
      id: this.state.id,
      name: this.state.name,
      image: this.state.image,
      price: this.state.price
    }

    return cardObj;
  }

  filterHandler = async (getData,pathVariable) => {
    // console.log(getData);
    
      const options = {
        method: "GET",
        url: `http://localhost:8080/products/filter/${pathVariable}`,
        headers: authHeader(),
        params: getData,
      };
  
      await axios
        .request(options)
        .then((response) => {
               this.setState({
          productList: response.data

        });
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
  };

  clearFilter = () => {
    console.log("cleared");
    const updatedData = this.state.productList;
    const options = {
      method: "GET",
      url: `http://localhost:8080/products/all`,
      headers: authHeader(),
    };
    axios
      .request(options)
      .then((response) => {
             this.setState({
        productList: response.data

      });
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

  };

  render() {
    return (
      <Row className="vh-100" style={{width:"97vw"}}>

        {/* <Col xs={1} className="bg-secondary vh-100"></Col> */}

        <Col xs={9}>
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
            <StoreProductInfo
               id= {this.state.id}
              name={this.state.name}
              price={this.state.price}
              image={this.state.image}
               />                
            
        
          </Row>
        </Col>
      </Row>
    );
  }
}

export default StoreMainpage;
