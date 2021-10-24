import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class StoreProductListProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  productClickHandler = () => {
    alert("change state");
  };
  render() {
    return (
      <Col>
        <Card
          style={{ width: "18rem" }}
          onClick={() => this.productClickHandler()}
        >
          <Card.Img variant="top" src={this.props.image} />
          <Card.Body>
            <Card.Text>
              <p>{this.props.name}</p>
            </Card.Text>
            <Card.Text>
              <p className="h3">{this.props.price} JD</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default StoreProductListProductCard;
