import React from "react";
import Table from "react-bootstrap/Table";
import { Row, Col, Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
// import checkoutModal from "./checkoutModal";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFlag:false,
      quantityArray: [],
      totalPrice: 0.0,
      staticPrice: 0.0,
    };
  }
  async componentDidMount() {
    let newArray = [];
    newArray.push(
      {
        imageUrlList: [
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        ],
        name: "aaaaaa",
        brand: "sam",
        model: "note 20",
        color: "black",
        price: 700,
      },
      {
        imageUrlList: [
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        ],
        name: "aaaaaa",
        brand: "sam",
        model: "note 20",
        color: "black",
        price: 700,
      }
    );

    localStorage.setItem("item", JSON.stringify(newArray));
    let array = [];
    let price = 0.0;
    console.log(JSON.parse(localStorage.getItem("item")));
    for (
      let index = 0;
      index < JSON.parse(localStorage.getItem("item")).length;
      index++
    ) {
      array.push(1);
      price += JSON.parse(localStorage.getItem("item"))[index].price;
    }

    await this.setState({
      quantityArray: array,
      totalPrice: price,
      staticPrice: price,
    });
    console.log(this.state.quantityArray);
  }

  handleIncerement = (idx) => {
    let array = this.state.quantityArray;
    let productPrice = JSON.parse(localStorage.getItem("item"))[idx].price;
    for (let i = 0; i < array.length; i++) {
      if (i === idx) {
        array[i] += 1;
      }
    }
    this.setState({
      quantityArray: array,
      totalPrice: this.state.totalPrice + productPrice,
    });
  };

  handleDecrement = (idx) => {
    let array = this.state.quantityArray;
    let productPrice = JSON.parse(localStorage.getItem("item"))[idx].price;
    for (let i = 0; i < array.length; i++) {
      if (i === idx) {
        if (array[i] < 2) {
          array[i] = 1;
        } else {
          array[i] -= 1;
          this.setState({
            totalPrice: this.state.totalPrice - productPrice,
          });
        }
      }
    }
    this.setState({
      quantityArray: array,
    });
  };
//=========================
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      formFlag: false,
    });
  };
//=========================
  showForm = () => {
    this.setState({
      formFlag: true,
    });
  };
  hideForm = () => {
    this.setState({
      formFlag: false,
    });
  };

  deleteHandler = (idx) => {
    let array = [...JSON.parse(localStorage.getItem("item"))];
    let array2 = this.state.quantityArray;
    let quantity = this.state.quantityArray[idx];
    let price = array[idx].price;
    let quantityPrice = quantity * price;
    if (idx > -1) {
      array.splice(idx, 1);
      array2.splice(idx, 1);
      
    }
    localStorage.setItem("item", JSON.stringify(array));
    this.setState({
      totalPrice: this.state.totalPrice - quantityPrice,
      quantityArray : array2
    });
  };

  
  render() {
    return (
      <>
         
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {JSON.parse(localStorage.getItem("item")).map((item, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td style={{ width: "15%", height: "15%" }}>
                    <img
                      style={{ width: "50%", height: "50%" }}
                      src={item.imageUrlList}
                    ></img>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.brand}</td>
                  <td>{item.model}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>
                    {this.state.quantityArray[idx]}
                    <a
                      style={{ marginLeft: "10%" }}
                      href="#"
                      onClick={() => this.handleIncerement(idx)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-plus-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                      </svg>
                    </a>
                    <a
                      style={{ marginLeft: "1%" }}
                      href="#"
                      onClick={() => this.handleDecrement(idx)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash-square-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                      </svg>
                    </a>
                  </td>
                  <td>
                    <a href="#" onClick={() => this.deleteHandler(idx)}>
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            <p>Total Price:{this.state.totalPrice}</p>
          </Table>
          <Button onClick={() => this.showForm()}>Checkout</Button>

          <Modal show={this.state.formFlag} onHide={() => this.hideForm()} >
            <Modal.Header closeButton>
              <Modal.Title>Confarming Purchases</Modal.Title>
            </Modal.Header>
            
              <Form onSubmit={(e) => this.submitHandler(e)}>
                <Row className="align-items-center">
                  <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                    <Form.Label htmlFor="First Name">First Name</Form.Label>
                    <Form.Control
                      id="inlineFormInputName"
                      placeholder="First Name"
                    />
                  </Col>
                  <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                    <Form.Label htmlFor="Last Name">Last Name</Form.Label>
                    <Form.Control
                      id="inlineFormInputName"
                      placeholder="Last Name"
                    />
                  </Col>
                  <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                    <Form.Label htmlFor="Email">Email</Form.Label>
                    <Form.Control
                      id="inlineFormInputName"
                      placeholder="Email"
                    />
                  </Col>
                  <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                    <Form.Label htmlFor="Address">Address</Form.Label>
                    <Form.Control
                      id="inlineFormInputName"
                      placeholder="Address"
                    />
                  </Col>
                  <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                    {" "}
                    <Form.Label htmlFor="Country">Country</Form.Label>
                    <Form.Select aria-label="Country">
                      <option>choose country</option>
                      <option value="1">Jordan</option>
                      <option value="2">Palestine</option>
                      <option value="3">Turkey</option>
                      <option value="1">Egypt</option>
                      <option value="2">Saudi Arabia</option>
                      <option value="3">Germany</option>
                    </Form.Select>
                  </Col>
                  <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                    <Form.Label htmlFor="Card number">
                      Card number(Cridet or Depit)
                    </Form.Label>
                    <Form.Control
                      id="inlineFormInputName"
                      placeholder="1234 1234 1234 1234"
                    />
                  </Col>
                  <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                    <Form.Label htmlFor="Experiation Date">
                      Experiation Date
                    </Form.Label>
                    <Form.Control
                      id="inlineFormInputName"
                      placeholder="MM/YY"
                    />
                  </Col>
                  <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                    <Form.Label htmlFor="CVV/CVN">CVV/CVN</Form.Label>
                    <Form.Control id="inlineFormInputName" placeholder="CVC" />
                  </Col>
                  <Col xs="auto" className="my-1" style={{ width: "45rem" }}>
                    <Button type="submit">Confirm Purchase</Button>
                  </Col>
                </Row>
              </Form>
            
            <Modal.Footer>
              <Button variant="secondary" onClick={() => this.hideForm()}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        
         
        
      </>
    );
  }
}
export default Cart;
