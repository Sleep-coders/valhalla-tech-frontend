import React, { Component } from "react";
import axios from "axios";
import authHeader from "../../services/auth-header";

export class AdminTotalSalesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    const options = {
      method: "GET",
      url: "http://localhost:8080/dataStorageInf",
      headers: authHeader(),
    };
    axios
      .request(options)
      .then((response) => {
        console.log(response);
        this.setState({ data: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        {this.state.data ? (
          <div class="col-6 mt-2 mx-3">
            <div class="card p-3 m-2">
              <div class="d-flex">
                <h6 class="flex-grow-1"></h6>
                <h6></h6>
              </div>
              <div class="d-flex flex-column temp mt-0 mb-0">
                <h1 class="mb-0 font-weight-bold" id="heading">
                  {" "}
                  Total Sales{" "}
                </h1>{" "}
                <i class="bi bi-receipt" style={{ fontSize: "80px" }}></i>
                <h1 class="mb-0" id="heading">
                  {" "}
                  {this.state.data.totalOfSales}{" "}
                </h1>{" "}
              </div>
              <div class="d-flex"></div>
            </div>
          </div>
        ) : (
          <div class="col-6 mt-2 mx-3">
            <div class="card p-3 m-2">
              <div class="d-flex">
                <h6 class="flex-grow-1"></h6>
                <h6></h6>
              </div>
              <div class="d-flex flex-column temp mt-0 mb-0">
                <h1 class="mb-0 font-weight-bold" id="heading">
                  {" "}
                  Total Sales{" "}
                </h1>{" "}
                <i class="bi bi-receipt" style={{ fontSize: "80px" }}></i>
                <h1 class="mb-0" id="heading">
                  {" "}
                </h1>{" "}
              </div>
              <div class="d-flex"></div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default AdminTotalSalesCard;
