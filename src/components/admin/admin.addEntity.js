import React, { Component } from "react";
import { Col, Row, Form, FloatingLabel, Button } from "react-bootstrap";

export class AdminAddEntity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all",
    };
  }
  categoryChange = (e) => {
    console.log(e.target.value);
    this.setState({ category: e.target.value });
  };
  render() {
    return (
      <Row className="d-flex justify-content-center mx-3">
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
                  <option value="all">All Categories</option>
                  <option value="homeAppliances">Home Appliances</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="computers">Computers</option>
                  <option value="smartPhones">Smart Phones</option>
                </Form.Select>
              </Row>
              <Row className="mt-3">
                <Form.Label>Sub-Category</Form.Label>
                <Form.Select
                  aria-label="Floating label select example"
                  name="sub_category"
                >
                  {this.state.category == "all" ? (
                    <>
                      <option value="allsub">All Sub-Categories</option>
                    </>
                  ) : this.state.category == "homeAppliances" ? (
                    <>
                      <option value="allsub">All Sub-Categories</option>
                      <option value="homeAppliances-vacuumMachine">
                        Vacuum Machines
                      </option>
                      <option value="homeAppliances-refrigerator">
                        Refrigerators
                      </option>
                      <option value="homeAppliances-washingMachines">
                        Washing Machines
                      </option>
                    </>
                  ) : this.state.category == "entertainment" ? (
                    <>
                      <option value="0">All Sub-Categories</option>
                      <option value="0">TVs</option>
                      <option value="0">Gaming Consoles</option>
                    </>
                  ) : this.state.category == "computers" ? (
                    <>
                      <option value="0">All Sub-Categories</option>
                      <option value="computer-desktop">Desktops</option>
                      <option value="computer-laptop">Laptops</option>
                    </>
                  ) : this.state.category == "smartPhones" ? (
                    <option value="allsub">All Sub-Categories</option>
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
                <FloatingLabel
                  controlId="floatingTextarea2"
                  label="Description"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "80px" }}
                  />
                </FloatingLabel>
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
