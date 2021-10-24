import React from "react";

import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreCategoryFilterPriceSlider from "./store.categoryFilter.priceSlider";
import StoreCategoryFilterStarRating from "./store.categoryFilter.starRating.js";

class StoreCategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all",
      price: 0,
      rating: 0,
    };
  }

  categoryChange = (e) => {
    console.log(e.target.value);
    this.setState({ category: e.target.value });
  };

  changePrice = (e) => {
    this.setState({ price: e.target.value });
  };

  ratingChanger = (value) => {
    this.setState({ rating: value });
  };

  render() {
    return (
      <>
        <Row className="d-flex justify-content-center">
          <Col xs={6}>
            <div className="input-group rounded">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedBy="search-addon"
              />
              <span className="input-group-text" id="search-addon">
                <i className="bi bi-search fs-4"></i>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Row>
                <Col xs={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Category</Form.Label>
                    <Form.Select
                      aria-label="Floating label select example"
                      onChange={this.categoryChange}
                    >
                      <option value="all">All Categories</option>
                      <option value="home">Home Appliances</option>
                      <option value="entertainment">Entertainment</option>
                      <option value="computers">Computers</option>
                      <option value="phones">Smart Phones</option>
                    </Form.Select>
                  </Form.Group>
                </Col>

                <Col xs={3}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sub Category</Form.Label>
                    <Form.Select aria-label="Floating label select example">
                      {this.state.category == "all" ? (
                        <>
                          <option value="allsub">All Sub-Categories</option>
                        </>
                      ) : this.state.category == "home" ? (
                        <>
                          <option value="allsub">All Sub-Categories</option>
                          <option value="0">Vacuum Machines</option>
                          <option value="0">Refrigerators</option>
                          <option value="0">Washing Machines</option>
                          <option value="0">Dish Washers</option>
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
                          <option value="0">Desktops</option>
                          <option value="0">Laptops</option>
                        </>
                      ) : this.state.category == "phones" ? (
                        <option value="0">All Sub-Categories</option>
                      ) : null}
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Col>
                      <Form.Group>
                        <Form.Label>Price ( JD )</Form.Label>
                        <StoreCategoryFilterPriceSlider
                          min={0}
                          max={2000}
                          onChange={({ min, max }) =>
                            console.log(`min = ${min}, max = ${max}`)
                          }
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <StoreCategoryFilterStarRating
                          value={0}
                          nibba={({ value }) => {
                            console.log(value);
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Check
                          type="checkbox"
                          label="Show In Stock Only"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </>
    );
  }
}

export default StoreCategoryFilter;
