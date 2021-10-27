import React, { Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import authHeader from "../../services/auth-header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminAddEntity from "./admin.addEntity";
import DatatablePage from "./admin.table";
import "mdbreact/dist/css/mdb.css";

const API_URL = "http://localhost:8080/products/";
export class AdminMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 0,
      productsList: [],
      counter: 0,
    };
  }

  componentDidMount = () => {
    const options = {
      method: "GET",
      url: API_URL + "all",
      headers: authHeader(),
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.setState({ productsList: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteProduct = () => {
    const product = this.state.productsList.find(
      (item) => item.id == this.state.productID
    );
    const options = {
      method: "DELETE",
      url: API_URL + `${product.id}/${product.type}`,
      headers: authHeader(),
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.setState({
          counter: this.state.counter + 1,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  counterIncreaser = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <Row className="" style={{ height: "90vh" }}>
        {/* <Col xs={1} className="bg-secondary vh-100"></Col> */}

        <Col xs={7}>
          <Row className="bg-information" style={{ height: "30vh" }}></Row>
          <Row style={{ height: "60vh", backgroundColor: "#116488" }}>
            <Col>
              <AdminAddEntity counterIncreaser={this.counterIncreaser} />
            </Col>
          </Row>
        </Col>

        <Col xs={5}>
          <Row className="" style={{ height: "90vh" }}>
            <DatatablePage
              productsList={this.state.productsList}
              counter={this.state.counter}
            />
            <Form>
              <Form.Group
                as={Row}
                className="d-flex justify-content-center align-items-center"
              >
                <Form.Label className="h5 text-center mb-4">
                  Enter a product ID from above table and choose an action
                </Form.Label>
                <Col xs={7}>
                  <Form.Control
                    type="number"
                    placeholder="Product ID"
                    name="id"
                    min="1"
                    onChange={async (e) => {
                      if (e.target.value >= 1) {
                        await this.setState({ productID: e.target.value });
                      } else {
                        alert("you cant add less than 1");
                      }

                      console.log(this.state.productID);
                    }}
                  />
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <Row className="d-flex flex-row align-items-center">
                    <Col className="d-flex justify-content-center align-items-center">
                      <Button
                        variant="danger"
                        type="button"
                        onClick={this.deleteProduct}
                      >
                        Delete
                      </Button>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                      {" "}
                      <Button variant="success" type="button">
                        Update
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Form.Group>
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default AdminMainPage;
