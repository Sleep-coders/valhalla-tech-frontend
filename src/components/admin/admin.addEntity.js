import React, { Component } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import axios from "axios";
import authHeader from "../../services/auth-header";

const API_URL = `${process.env.REACT_APP_SERVER_URL}/products/`;

export class AdminAddEntity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "homeappliances",
      sub_category: "homeappliances-vacuummachine",
      file: null,
    };
  }
  categoryChange = async (e) => {
    console.log(e.target.value);
    this.setState({ category: e.target.value });
    if (e.target.value == "homeappliances") {
      await this.setState({ sub_category: "homeappliances-vacuummachine" });
      console.log(this.state.sub_category);
    } else if (e.target.value == "entertainment") {
      await this.setState({ sub_category: "entertainment-tv" });
      console.log(this.state.sub_category);
    } else if (e.target.value == "computers") {
      await this.setState({ sub_category: "computer-desktop" });
      console.log(this.state.sub_category);
    } else if (e.target.value == "smartphone") {
      await this.setState({ sub_category: "smartphone" });
      console.log(this.state.sub_category);
    }
  };

  postHandling = async (e) => {
    e.preventDefault();
    const target = e.target;
    const newImage = [];
    newImage.push(this.state.imageUrl);
    console.log(newImage);

    const postData = {
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
      imageUrlList: this.state.file ? newImage : null,
    };

    const options = {
      method: "post",
      url: API_URL,
      headers: authHeader(),
      data: postData,
    };

    await axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        this.props.addingProduct(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fileHandler = async (e) => {
    console.log(e.target.files[0]);

    await this.setState({
      file: e.target.files[0],
    });
  };

  fileUploadHandler = () => {
    const imageData = new FormData();
    imageData.append("image", this.state.file);
    axios
      .post(
        `https://api.imgbb.com/1/upload?key=35e78e11c9ee326d3d5820bfb541c27e`,
        imageData,
        {
          onUploadProgress: (progressEvent) => {
            this.setState({
              uploadMeter: Math.round(
                (progressEvent.loaded / progressEvent.total) * 100
              ),
            });
          },
        }
      )
      .then((result) => {
        console.log(result.data);
        this.setState({
          imageUrl: result.data.data.image.url,
        });
        console.log(this.state.imageUrl);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Row className="mx-5">
        <Col>
          <Row className="mt-3">
            <h1 className="text-white text-center h3">Add a new product</h1>
          </Row>
          <Row>
            <Col>
              <Row>
                <Form.Label className="text-white">Category</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={this.categoryChange}
                  name="category"
                >
                  <option value="homeappliances">Home Appliances</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="computers">Computers</option>
                  <option value="smartphone">Smart Phones</option>
                </Form.Select>
              </Row>
              <Row className="mt-3">
                <Form.Label className="text-white">Sub-Category</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="sub_category"
                  onChange={async (e) => {
                    await this.setState({ sub_category: e.target.value });
                    console.log(this.state.sub_category);
                  }}
                >
                  {this.state.category == "all" ? (
                    <>
                      <option value="allsub">All Sub-Categories</option>
                    </>
                  ) : this.state.category == "homeappliances" ? (
                    <>
                      <option value="homeappliances-vacuummachine">
                        Vacuum Machines
                      </option>
                      <option value="homeappliances-refrigerator">
                        Refrigerators
                      </option>
                      <option value="homeappliances-washingmachine">
                        Washing Machines
                      </option>
                    </>
                  ) : this.state.category == "entertainment" ? (
                    <>
                      <option value="entertainment-tv">TVs</option>
                      <option value="entertainment-gamingConsole">
                        Gaming Consoles
                      </option>
                    </>
                  ) : this.state.category == "computers" ? (
                    <>
                      <option value="computer-desktop">Desktops</option>
                      <option value="computer-laptop">Laptops</option>
                    </>
                  ) : this.state.category == "smartphone" ? (
                    <option value="smartphone">Smart Pones</option>
                  ) : null}
                </Form.Select>
              </Row>
            </Col>
          </Row>
          <Row>
            <Form onSubmit={(e) => this.postHandling(e)}>
              <Row className="my-3">
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    name="price"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Model"
                    name="model"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Brand"
                    name="brand"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Weight"
                    name="weight"
                    size="sm"
                  />
                </Form.Group>
              </Row>
              <Row className="my-3">
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Color"
                    name="color"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Power Consumption"
                    name="powerConsumption"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Year Of Production"
                    name="yearOfProduction"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    size="sm"
                  />
                </Form.Group>
              </Row>
              <Row className="my-3">
                <Col>
                  <Form.Control
                    as="textarea"
                    placeholder="Product Description"
                    name="description"
                    style={{ height: "80px" }}
                    className="mb-3"
                    size="sm"
                  />
                </Col>
                <Col>
                  <Row>
                    <Col>
                      <Form.Control
                        class="form-control"
                        type="file"
                        id="formFile"
                        onChange={this.fileHandler}
                        size="sm"
                      />
                    </Col>
                    <Col>
                      <div className="form-group my-2">
                        <Button
                          className="text-center btn-success btn-sm"
                          variant="primary"
                          onClick={this.fileUploadHandler}
                        >
                          Upload
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Col>

                {this.state.sub_category == "homeappliances-refrigerator" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Door Numbers"
                        name="doorNumber"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Drawer Numbers"
                        name="drawerNumber"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Size"
                        name="size"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="Has Ice Crusher"
                        name="iceCrusher"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="Has Water Cooler"
                        name="waterCooler"
                      />
                    </Form.Group>
                  </>
                ) : this.state.sub_category ==
                  "homeappliances-vacuummachine" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Air Flow"
                        name="airflow"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Noise Level"
                        name="noiseLevel"
                      />
                    </Form.Group>
                  </>
                ) : this.state.sub_category ==
                  "homeappliances-washingmachine" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Capacity"
                        name="capacity"
                      />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "entertainment-gamingConsole" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Storage"
                        name="storage"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="VR Support"
                        name="vrSupport"
                      />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "entertainment-tv" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Panel Size"
                        name="panelSize"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Panel Type"
                        name="panelType"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Panel Resolution"
                        name="panelResolution"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="Is Smart"
                        name="smart"
                      />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "computer-desktop" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="CPU" name="cpu" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="RAM" name="ram" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Storage"
                        name="storage"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="GPU" name="gpu" />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "computer-laptop" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="CPU" name="cpu" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="RAM" name="ram" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Storage"
                        name="storage"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="GPU" name="gpu" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Panel Size"
                        name="panelSize"
                      />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "smartphone" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="CPU" name="cpu" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="RAM" name="ram" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Storage"
                        name="storage"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="GPU" name="gpu" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Camera"
                        name="camera"
                      />
                    </Form.Group>
                  </>
                ) : null}
              </Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default AdminAddEntity;
