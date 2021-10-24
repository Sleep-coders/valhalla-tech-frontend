import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
  Accordion,
} from "react-bootstrap";
import "./styles/store.productList.scss";
import "font-awesome/css/font-awesome.min.css";
import StoreProductInfoReview from "./store.productInfo.review";

class StoreProductInfo extends Component {
  render() {
    return (
      <Card
        className="overflow-auto customOverFlow"
        style={{ width: "100%", height: "100%" }}
      >
        <Card.Img
          variant="top"
          src="https://www.dwyers.ie/wp-content/uploads/2019/10/WM1480P1-600x600.jpg"
        />
        <Card.Body>
          <Card.Title className="fw-bold text-primary">Samsung</Card.Title>
          <Card.Title>Fisher & Paykel WM1480P1 Washing Machine</Card.Title>
          <Card.Title className="fs-6">WD22T6300GV/RQ</Card.Title>
          <Card.Title className="fs-6 text-success">In Stock</Card.Title>
          <Card.Title className="fs-4">450 JD</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            cumque cum ea consequatur odio magni natus officiis quod quaerat
            quas exercitationem, distinctio est explicabo facilis nisi aut
            repellat nam quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sint, consequatur architecto quaerat deleniti
            neque culpa atque molestiae aliquam dolores maiores, natus eligendi!
            Excepturi animi eos harum culpa explicabo hic cumque.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            {" "}
            <div className="stars">
              {" "}
              <i className="fa fa-star text-warning"></i>{" "}
              <i className="fa fa-star text-warning"></i>{" "}
              <i className="fa fa-star text-warning"></i>{" "}
              <i className="fa fa-star text-warning"></i>{" "}
              <i className="fa fa-star"></i>{" "}
            </div>
          </ListGroupItem>
          <ListGroupItem>Power : 2000Watt</ListGroupItem>
          <ListGroupItem>Color : White</ListGroupItem>
          <ListGroupItem className="p-0">
            <Accordion>
              <Accordion.Item>
                <Accordion.Header>Reviews</Accordion.Header>
                <Accordion.Body className="d-grid">
                  <StoreProductInfoReview />
                  <StoreProductInfoReview />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link className="btn btn-primary" href="#">
            Add to cart
          </Card.Link>
          <Card.Link href="#">Add to Whish list</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default StoreProductInfo;
