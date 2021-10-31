import React from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import authHeader from "../../services/auth-header";
import "./cart.css"
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formFlag: false,
      quantityArray: [],
      totalPrice: 0.0,
      hasItems: false,
    };
  }

  async componentDidMount() {
    let array1 = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (array1.length > 0) {
      this.setState({
        hasItems: true,
      });

      let arrayItems = [...array1];
      let array = [];
      let price = 0.0;
      for (let index = 0; index < arrayItems.length; index++) {
        array.push(1);
        price += arrayItems[index].price;
      }
      await this.setState({
        quantityArray: array,
        totalPrice: price,
      });

      console.log(this.state.quantityArray);
    }

  }


  handleIncerement = (idx) => {
    let array = this.state.quantityArray;
    let productPrice = JSON.parse(localStorage.getItem("cartItems"))[idx].price;
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
    let productPrice = JSON.parse(localStorage.getItem("cartItems"))[idx].price;
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
  submitHandler = async (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    this.setState({
      formFlag: false,
    });
    const cardData = {
      creditCardNumber: event.target.cardNumber.value,
      cvv: event.target.CVV.value,
      expDate: event.target.cardEXP.value,
      creditCardOwnerName:
        event.target.firstName.value + " " + event.target.lastName.value,
      user: user,
    };
    if (!localStorage.key == user.username) {
      localStorage.setItem(user.username, JSON.stringify(cardData));
    }

    let strageData = JSON.parse(localStorage.getItem("cartItems")) || [];
    let productList = [...strageData];
    let quantityArr = this.state.quantityArray;
    let productsId = [];
    // let obj = {};
    for (let i = 0; i < productList.length; i++) {
      let id = productList[i].id;
      productsId.push(id);
    }

    const purchaseData = {
      userId: user.id,
      productsIds: productsId,
      productsQuantity: quantityArr,
    };
    const options1 = {
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_URL}/users/purchases`,
      headers: authHeader(),
      data: purchaseData,
    };
    await axios
      .request(options1)
      .then((response) => {
        let data = response.data;

        console.log(data);
      })

      .catch((err) => {
        console.log(err);
      });
    localStorage.removeItem("cartItems");
    this.setState({
      hasItems: false,
      totalPrice: 0,
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
    let array = [...JSON.parse(localStorage.getItem("cartItems"))];
    let array2 = this.state.quantityArray;
    let quantity = this.state.quantityArray[idx];
    let price = array[idx].price;
    let quantityPrice = quantity * price;
    if (idx > -1) {
      array.splice(idx, 1);
      array2.splice(idx, 1);
    }
    localStorage.setItem("cartItems", JSON.stringify(array));
    this.setState({
      totalPrice: this.state.totalPrice - quantityPrice,
      quantityArray: array2,
    });
  };
  render() {
    return (
      <>
        <table
          className="table table-hover border-dark w-75 mt-5"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
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
            {console.log(this.state.hasItems)}
            {this.state.hasItems &&
              JSON.parse(localStorage.getItem("cartItems")).map((item, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td style={{ width: "15%", height: "15%" }}>
                    <img
                      style={{ width: "50%", height: "50%" }}
                      src={item.image}
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
                      onClick={() => this.handleIncerement(idx)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-plus-square-fill"
                        viewBox="0 0 16 16"
                        color="#103b4c"
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
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-dash-square-fill"
                        viewBox="0 0 16 16"
                        color="#103b4c"
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
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                        color="#103b4c"
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
        </table>
        <h4 style={{ textAlign: "center" }}>
          The Total Price: <strong>{this.state.totalPrice}</strong>
        </h4>
        {/* <Button
          onClick={() => this.showForm()}
          style={{ marginLeft: "25%", marginRight: "auto", width: "50%" }}
        >
          Checkout
        </Button> */}
        
        <button class="buttonCart" onClick={() => this.showForm()} style={{ marginLeft: "39%", marginRight: "auto", width: "22%", marginTop:"5%" }}>
  <span class="buttonCart__text">
        Checkout
  </span>
  <svg class="buttonCart__svg" role="presentational" viewBox="0 0 600 600">
    <defs>
      <clipPath id="myClip">
        <rect x="0" y="0" width="100%" height="50%" />
      </clipPath>
    </defs>
    <g clip-path="url(#myClip)">
      <g id="money">
        <path d="M441.9,116.54h-162c-4.66,0-8.49,4.34-8.62,9.83l.85,278.17,178.37,2V126.37C450.38,120.89,446.56,116.52,441.9,116.54Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
        <path d="M424.73,165.49c-10-2.53-17.38-12-17.68-24H316.44c-.09,11.58-7,21.53-16.62,23.94-3.24.92-5.54,4.29-5.62,8.21V376.54H430.1V173.71C430.15,169.83,427.93,166.43,424.73,165.49Z" fill="#699e64" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
      </g>
      <g id="creditcard">
        <path d="M372.12,181.59H210.9c-4.64,0-8.45,4.34-8.58,9.83l.85,278.17,177.49,2V191.42C380.55,185.94,376.75,181.57,372.12,181.59Z" fill="#a76fe2" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
        <path d="M347.55,261.85H332.22c-3.73,0-6.76-3.58-6.76-8v-35.2c0-4.42,3-8,6.76-8h15.33c3.73,0,6.76,3.58,6.76,8v35.2C354.31,258.27,351.28,261.85,347.55,261.85Z" fill="#ffdc67" />
        <path d="M249.73,183.76h28.85v274.8H249.73Z" fill="#323c44" />
      </g>
    </g>
    <g id="wallet">
      <path d="M478,288.23h-337A28.93,28.93,0,0,0,112,317.14V546.2a29,29,0,0,0,28.94,28.95H478a29,29,0,0,0,28.95-28.94h0v-229A29,29,0,0,0,478,288.23Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
      <path d="M512.83,382.71H416.71a28.93,28.93,0,0,0-28.95,28.94h0V467.8a29,29,0,0,0,28.95,28.95h96.12a19.31,19.31,0,0,0,19.3-19.3V402a19.3,19.3,0,0,0-19.3-19.3Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
      <path d="M451.46,435.79v7.88a14.48,14.48,0,1,1-29,0v-7.9a14.48,14.48,0,0,1,29,0Z" fill="#a4bdc1" stroke="#323c44" stroke-miterlimit="10" stroke-width="14" />
      <path d="M147.87,541.93V320.84c-.05-13.2,8.25-21.51,21.62-24.27a42.71,42.71,0,0,1,7.14-1.32l-29.36-.63a67.77,67.77,0,0,0-9.13.45c-13.37,2.75-20.32,12.57-20.27,25.77l.38,221.24c-1.57,15.44,8.15,27.08,25.34,26.1l33-.19c-15.9,0-28.78-10.58-28.76-25.93Z" fill="#7b8f91" />
      <path d="M148.16,343.22a6,6,0,0,0-6,6v92a6,6,0,0,0,12,0v-92A6,6,0,0,0,148.16,343.22Z" fill="#323c44" />
    </g>

  </svg>
</button>
        {/* </Table> */}
        <Modal show={this.state.formFlag} onHide={() => this.hideForm()}>
          <Modal.Header closeButton>
            <h1>Confarming Purchases</h1>
          </Modal.Header>
          <Form
            onSubmit={(e) => this.submitHandler(e)}
            style={{ width: "100%", textAlign: "center" }}
          >
            <Row className="align-items-center">
              <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                <Form.Label htmlFor="First Name">First Name</Form.Label>
                <Form.Control
                  id="inlineFormInputName"
                  placeholder="First Name"
                  name="firstName"
                  type="text"
                />
              </Col>
              <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                <Form.Label htmlFor="Last Name">Last Name</Form.Label>
                <Form.Control
                  id="inlineFormInputName"
                  placeholder="Last Name"
                  name="lastName"
                  type="text"
                />
              </Col>
              <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                <Form.Label htmlFor="Email">Email</Form.Label>
                <Form.Control
                  id="inlineFormInputName"
                  placeholder="Email"
                  name="email"
                  type="text"
                />
              </Col>
              <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                <Form.Label htmlFor="Address">Address</Form.Label>
                <Form.Control
                  id="inlineFormInputName"
                  placeholder="Address"
                  name="address"
                  type="text"
                />
              </Col>
              <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                {" "}
                <Form.Label htmlFor="Country">Country</Form.Label>
                <Form.Select aria-label="Country" name="country">
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
                  name="cardNumber"
                  type="number"
                />
              </Col>
              <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                <Form.Label htmlFor="Experiation Date">
                  Experiation Date
                </Form.Label>
                <Form.Control
                  id="inlineFormInputName"
                  placeholder="MM/YY"
                  name="cardEXP"
                  type="text"
                />
              </Col>
              <Col sm={3} className="my-1" style={{ width: "45rem" }}>
                <Form.Label htmlFor="CVV/CVN">CVV/CVN</Form.Label>
                <Form.Control
                  id="inlineFormInputName"
                  placeholder="CVC"
                  name="CVV"
                  type="text"
                />
              </Col>
              <Col xs="auto" style={{ width: "45rem" }}>
                <Button variant="secondary" type="submit">
                  Confirm Purchase
                </Button>
              </Col>
            </Row>
          </Form>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.hideForm()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default Cart;
