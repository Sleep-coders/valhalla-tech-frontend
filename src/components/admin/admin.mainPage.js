import React, { Component } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import authHeader from "../../services/auth-header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminAddEntity from "./admin.addEntity";
import DatatablePage from "./admin.table";
import WeatherCard from "./admin.weatherCard";
import "mdbreact/dist/css/mdb.css";
import "./styles/admin.mainPage.scss";
import UpdateModal from "./admin.updatingModal";
import AdminTotalSalesCard from "./admin.totalSalesCard";

const API_URL = `${process.env.REACT_APP_SERVER_URL}/products/`;
export class AdminMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productID: 0,
      productsList: [],
      counter: 0,
      showModal: false,
      toBeUpdatedProduct: null,
    };
  }

  componentDidMount = async () => {
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

  addingProduct = (items) => {
    this.setState({
      productsList: items,
    });
  };

  deleteProduct = () => {
    const product = this.state.productsList.find(
      (item) => item.id == this.state.productID
    );
    const options = {
      method: "DELETE",
      url: API_URL + `${product.id}`,
      headers: authHeader(),
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.setState({
          productsList: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  showModal = async () => {
    const product = this.state.productsList.find(
      (item) => item.id == this.state.productID
    );
    console.log(product);
    await this.setState({
      toBeUpdatedProduct: product,
      sub_category: product.type,
    });
    await this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  updateHandling = (e) => {
    e.preventDefault();
    this.setState({ showModal: false });
    const target = e.target;
    const postData = {
      id: this.state.productID,
      type: this.state.sub_category,
      name: target.name.value,
      price: target.price.value,
      model: target.model.value,
      weight: target.weight.value,
      color: target.color.value,
      brand: target.brand.value,
      powerConsumption: target.powerConsumption.value,
      yearOfProduction: target.yearOfProduction.value,
      quantity: target.quantity.value,
      description: target.description.value,
      doorNumber: target.doorNumber ? target.doorNumber.value : null,
      size: target.size ? target.size.value : null,
      iceCrusher: target.iceCrusher ? target.iceCrusher.checked : null,
      waterCooler: target.waterCooler ? target.waterCooler.checked : null,
      airFlow: target.airFlow ? target.airFlow.value : null,
      noiseLevel: target.noiseLevel ? target.noiseLevel.value : null,
      capacity: target.capacity ? target.capacity.value : null,
      storage: target.storage ? target.storage.value : null,
      vrSupport: target.vrSupport ? target.vrSupport.checked : null,
      panelSize: target.panelSize ? target.panelSize.value : null,
      panelType: target.panelType ? target.panelType.value : null,
      panelResolution: target.panelResolution
        ? target.panelResolution.value
        : null,
      smartphone: target.smartphone ? target.smartphone.checked : null,
      cpu: target.cpu ? target.cpu.value : null,
      ram: target.ram ? target.ram.value : null,
      gpu: target.gpu ? target.gpu.value : null,
      camera: target.camera ? target.camera.value : null,
      drawerNumber: target.drawerNumber ? target.drawerNumber.value : null,
    };

    const options = {
      method: "put",
      url: API_URL,
      headers: authHeader(),
      data: postData,
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

  render() {
    return (
      <Row className="" style={{ height: "90vh" }}>
        {/* <Col xs={1} className="bg-secondary vh-100"></Col> */}

        <UpdateModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          toBeUpdatedProduct={this.state.toBeUpdatedProduct}
          sub_category={this.state.sub_category}
          updateHandling={this.updateHandling}
        />

        <Col xs={7}>
          <Row className="bg-information" style={{ height: "35vh" }}>
            <WeatherCard />
            <AdminTotalSalesCard />
          </Row>
          <Row style={{ height: "65vh", backgroundColor: "#116488" }}>
            <Col>
              <AdminAddEntity addingProduct={this.addingProduct} />
            </Col>
          </Row>
        </Col>

        <Col xs={5}>
          <Row className="" style={{ height: "100vh" }}>
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
                      } else if (e.target.value < 0) {
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
                      <Button
                        variant="success"
                        type="button"
                        onClick={this.showModal}
                      >
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
