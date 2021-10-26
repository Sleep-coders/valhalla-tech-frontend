import React, { Component } from "react";
import { Row } from "react-bootstrap";
import "./styles/store.productList.scss";
import StoreProductListProductCard from "./store.productList.productCard";

class StoreProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row xs={4} className="overflow-auto h-100 customOverFlow">
        {this.props.productList &&
          this.props.productList.map((item) => {
            return (
              <StoreProductListProductCard
                id={item.id}
                name={item.name}
                price={item.price}
                image={item.image}
              />
            );
          })}
      </Row>
    );
  }
}

export default StoreProductList;
