import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Col,
  Row,
  Card,Button,
  ListGroup,
  ListGroupItem,
  Accordion,
} from "react-bootstrap";
import "./styles/store.productList.scss";
import "font-awesome/css/font-awesome.min.css";
import StoreProductInfoReview from "./store.productInfo.review";
import SingleData from "./testing/singleProduct.json";

class StoreProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: "Samsung",
      price: 300,
      image:'urlsefase',
    };
  }
  handleAddCart = (e) => {
    e.preventDefault();
    const cartItems = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      image: this.state.image
  }    
    console.log("clicked cart");
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

  }

  handleWishlist=(e)=>{
    e.preventDefault();
    const wishlistItems = {
      id: this.state.id,
      name: this.state.name,
      price: this.state.price,
      image: this.state.image
  }    
    console.log("clicked wishlist");
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }

  render() {
    return (
      <Card
        className="overflow-auto customOverFlow"
        style={{ width: "100%", height: "100%"}}
      >
        <Card.Img
          variant="top"
          src="https://www.dwyers.ie/wp-content/uploads/2019/10/WM1480P1-600x600.jpg"
        />
          <Card.Title className="fw-bold text-primary">Samsung</Card.Title>
          <Card.Title>Fisher & Paykel WM1480P1 Washing Machine</Card.Title>
          <Card.Title className="fs-6">WD22T6300GV/RQ</Card.Title>
          <Card.Title className="fs-6 text-success">In Stock</Card.Title>
          <Card.Title className="fs-4">450 JD</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            cumque cum ea consequatur odio magni natus officiis quod quaerat
           
          </Card.Text>
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
        <Card.Body>

        <ListGroup className="list-group-flush">
        
          <ListGroupItem>Power : 2000Watt</ListGroupItem>
          <ListGroupItem>Color : White</ListGroupItem>
          <ListGroupItem className="p-0">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Reviews</Accordion.Header>
                <Accordion.Body className="d-grid">
                  <StoreProductInfoReview />
                  <StoreProductInfoReview />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </ListGroupItem>
          <Button className="btn btn-primary mb-1" onClick={this.handleAddCart}>Add to Cart</Button>
          <Button className="btn btn-success mb-2" onClick={this.handleWishlist}>Add to Wishlist</Button>
        </ListGroup>

         
        </Card.Body>
      </Card>
    );
  }
}

export default StoreProductInfo;
