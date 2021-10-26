import React from "react";

import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreCategoryFilterPriceSlider from "./store.categoryFilter.priceSlider";
import StoreCategoryFilterStarRating from "./store.categoryFilter.starRating.js";
import "bootstrap-icons/font/bootstrap-icons.css";

class StoreCategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all",
      minPrice: 0,
      maxPrice: 2000,
      rating: 0,
    };
  }

  categoryChange = (e) => {
    console.log(e.target.value);
    this.setState({ category: e.target.value });
  };

  filterHandler = (e) => {
    e.preventDefault();
    // sub_category= e.target.sub_category.value;
    const filterData = {
      // category: e.target.category.value,
      minPrice: this.state.minPrice,
      maxPrice: this.state.maxPrice,
      stars: this.state.rating,
      inStock: e.target.stock.checked,
    };
    this.props.filterHandler(filterData,e.target.sub_category.value);
  };

  render() {
    console.log("updating");
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
            <Form onSubmit={(e) => this.filterHandler(e)}>
              <Row>
                <Col xs={2}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
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
                  </Form.Group>
                </Col>

                <Col xs={2}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Sub Category</Form.Label>
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
                          <option value="allsub">All Sub-Categories</option>
                          <option value="entertainment-tv">TVs</option>
                          <option value="entertainment-gamingConsole">Gaming Consoles</option>
                        </>
                      ) : this.state.category == "computers" ? (
                        <>
                          <option value="allsub">All Sub-Categories</option>
                          <option value="computer-desktop">Desktops</option>
                          <option value="computer-laptop">Laptops</option>
                        </>
                      ) : this.state.category == "smartPhones" ? (
                        <option value="allsub">All Sub-Categories</option>
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
                          onChange={({ min, max }) => {
                            if (
                              this.state.minPrice != min ||
                              this.state.maxPrice != max
                            )
                              this.setState({ minPrice: min, maxPrice: max });
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <StoreCategoryFilterStarRating
                          value={this.state.rating}
                          onChange={({ value }) => {
                            if (this.state.rating != value) {
                              this.setState({ rating: value });
                            }
                          }}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Check
                          type="checkbox"
                          label="In Stock"
                          name="stock"
                        />
                      </Form.Group>
                    </Col>
                    <Col className="d-flex flex-column justify-content-center">
                      <Button size="sm" type="submit">
                        Filter
                      </Button>

                      <Button
                        size="sm"
                        className="btn-danger mt-1"
                        onClick={this.props.clearFilter}
                      >
                        Clear
                      </Button>
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
