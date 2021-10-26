import React, { Component } from "react";
import { Col, Row, Form, FloatingLabel, Button } from "react-bootstrap";

export class AdminAddEntity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "homeappliances",
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
    } else if (e.target.value == "smartphones") {
      await this.setState({ sub_category: "smartphones" });
      console.log(this.state.sub_category);
    }
  };
  render() {
    return (
      <Row className="mx-5">
        <Col>
          <Row className="mt-3">
            <h1 className="text-light text-center h3">Add a product</h1>
          </Row>
          <Row>
            <Col>
              <Row>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  onChange={this.categoryChange}
                  name="category"
                >
                  <option value="homeappliances">Home Appliances</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="computers">Computers</option>
                  <option value="smartphones">Smart Phones</option>
                </Form.Select>
              </Row>
              <Row className="mt-3">
                <Form.Label>Sub-Category</Form.Label>
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
                      <option value="entertainment-gamingconsole">
                        Gaming Consoles
                      </option>
                    </>
                  ) : this.state.category == "computers" ? (
                    <>
                      <option value="computer-desktop">Desktops</option>
                      <option value="computer-laptop">Laptops</option>
                    </>
                  ) : this.state.category == "smartphones" ? (
                    <option value="smartphones">Smart Pones</option>
                  ) : null}
                </Form.Select>
              </Row>
            </Col>
          </Row>
          <Row>
            <Form>
              <Row className="my-3">
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Model" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Brand" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Weight" />
                </Form.Group>
              </Row>
              <Row className="my-3">
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Color" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Power Consumption" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Year Of Production" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control type="text" placeholder="Quantity" />
                </Form.Group>
              </Row>
              <Row className="my-3">
                <Form.Control
                  as="textarea"
                  placeholder="Product Description"
                  style={{ height: "80px" }}
                  className="mb-3"
                />
                {this.state.sub_category == "homeappliances-refrigerator" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                  </>
                ) : this.state.sub_category ==
                  "homeappliances-vacuummachine" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                  </>
                ) : this.state.sub_category ==
                  "homeappliances-washingmachine" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "entertainment-gamingconsole" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "entertainment-tv" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "computer-desktop" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                  </>
                ) : this.state.sub_category == "computer-laptop" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control type="text" placeholder="Quantity" />
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
