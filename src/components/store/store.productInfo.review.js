import React, { Component } from "react";
import { Container, Col, Row, Card, Image } from "react-bootstrap";

export class StoreProductInfoReview extends Component {
  render() {
    return (
      <Card style={{ width: "100%" }} className="mt-3">
        <Card.Body>
          <Row>
            <Col className="d-flex flex-row justify-content-start align-items-center pl-3">
              <Image
                src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Photo.png"
                roundedCircle
                width="50px"
                style={{ marginRight: "5%" }}
              />
              <Card.Title>Osaid Alhomedy</Card.Title>
            </Col>
          </Row>

          <Card.Text className="mt-2">
            <h2 className="h5">
              <i className="fa fa-star text-warning"></i>{" "}
              <i className="fa fa-star text-warning"></i>{" "}
              <i className="fa fa-star text-warning"></i>{" "}
              <i className="fa fa-star text-warning"></i>{" "}
              <i className="fa fa-star"></i>{" "}
            </h2>
            <h4> Good Product</h4>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              officia magnam, at quasi pariatur tempora natus nisi fugiat
              mollitia placeat expedita quia aspernatur suscipit soluta, cum
              doloribus vel perspiciatis. Nobis.
            </p>
            <Card.Subtitle className="mb-2 text-muted">
              26/10/2021
            </Card.Subtitle>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default StoreProductInfoReview;
