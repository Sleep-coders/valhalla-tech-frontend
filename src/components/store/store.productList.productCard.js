import React, { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/store.productList.productCard.scss";

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
      <Row className="d-flex align-items-center">
        <Col className="d-flex justify-content-center align-items-center">
          <Card
            style={{ width: "18rem" }}
            className="mt-5 zoomInCard border border-light"
            onClick={() => this.productClickHandler()}
          >
            <Card.Img variant="top" src={this.props.image} />

            <Card.Body>
              <Card.Text>
                <p>{this.props.name}</p>
              </Card.Text>
              <Card.Text>
                <p className="h5">{this.props.price} JD</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default StoreProductListProductCard;