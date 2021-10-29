import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,Button,
  ListGroup,
  ListGroupItem,
  Accordion,
} from "react-bootstrap";
import "./styles/store.productList.scss";
import "font-awesome/css/font-awesome.min.css";
import StoreProductInfoReview from "./store.productInfo.review";
import Swal from 'sweetalert2/dist/sweetalert2.js'

class StoreProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  handleAddCart = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Added to cart',
      showConfirmButton: false,
      timer: 1500
    })
     

    const cartItems = {
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      image: this.props.image
  }    
    console.log("clicked cart");

    const cartArray=JSON.parse(localStorage.getItem("cartItems")) || [];
    cartArray.push(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartArray));

  }
  

  handleWishlist=(e)=>{
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Added to your Whishlist',
      showConfirmButton: false,
      timer: 1500
    })

    const wishlistItems = {
      id: this.props.id,
      name: this.props.name,
      price: this.props.price,
      image: this.props.image
  }    

  const wishlistArray=JSON.parse(localStorage.getItem("wishlistItems")) || [];
  console.log("wishlist : "+JSON.parse(localStorage.getItem("wishlistItems")));
  wishlistArray.push(wishlistItems);
  
    console.log("clicked wishlist");
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistArray));
  }

  render() {
    return (
      <Card
        className="overflow-auto customOverFlow"
        style={{ width: "100%", height: "100%"}}

      >
        <Card.Img
          variant="top"
          src={this.props.image}
        />
          <Card.Title className="fw-bold text-primary">{this.props.id}</Card.Title>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Title className="fs-6 text-success">In Stock</Card.Title>
          <Card.Title className="fs-4">{this.props.price} JD</Card.Title>
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
