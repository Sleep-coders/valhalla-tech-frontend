import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "./styles/store.productList.scss";
import StoreProductListProductCard from "./store.productList.productCard";

class StoreProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Row xs={3} className="overflow-auto h-100 customOverFlow">
        {this.props.productList &&
          this.props.productList.map((item) => {
            return (
              <StoreProductListProductCard
              showProductInfoHandler= {this.props.showProductInfoHandler}
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.imageUrlList ? item.imageUrlList[0]: ""}
              />
            );
          })}
      </Row>
    );
  }
}

export default StoreProductList;
