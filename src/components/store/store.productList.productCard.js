import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/store.productList.productCard.scss";

class StoreProductListProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row className="d-flex align-items-center">
        <Col className="d-flex justify-content-center align-items-center">
          <Card
            style={{ width: "18rem" }}
            className="mt-5 zoomInCard border border-light"
            onClick={() => this.props.showProductInfoHandler(this.props.item)}
          >
            <Card.Img
              variant="top"
              src={this.props.item.imageUrlList[0]}
              style={{ width: "15rem", height: "18rem" }}
            />

            <Card.Body>
              <Card.Text>
                <p>{this.props.item.name}</p>
              </Card.Text>
              <Card.Text>
                <p className="h5">{this.props.item.price} JD</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default StoreProductListProductCard;
