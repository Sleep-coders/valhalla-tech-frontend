import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import axios from "axios";
import authHeader from "../services/auth-header";
export default class Profile extends Component {
  constructor(props,context) {
    super(props,context);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      userImg: "",
      userName: "",
      isLoggedBasic: true,
      isLoggedWish: false,
      isLoggedHistory: false,
      purchaseHistory: [],
      flag: false,
      wishlistArray: [],
    };


  }

  async componentDidMount() {
    const user = AuthService.getCurrentUser();

    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });
    let wishlistData = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    await this.setState({
      wishlistArray: wishlistData,
    });

    const options = {
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/users/purchases/${user.id}`,
      headers: authHeader(),
    };
    axios
      .request(options)
      .then((response) => {
        this.setState({
          purchaseHistory: response.data,
        });
        console.log(response.data);
        console.log(this.state.purchaseHistory);
      })
      .catch((err) => {
        console.log(err);
      });

    if (this.state.purchaseHistory.length > 0) {
      this.setState({
        flag: true,
      });
    }
  }

  handleBasicInfoClick = () => {
    this.setState({
      isLoggedBasic: true,
      isLoggedWish: false,
      isLoggedHistory: false,
    });
  };

  handleWishListClick = () => {
    this.setState({
      isLoggedWish: true,
      isLoggedBasic: false,
      isLoggedHistory: false,
    });
  };

  handleHistoryClick = () => {
    this.setState({
      isLoggedBasic: false,
      isLoggedWish: false,
      isLoggedHistory: true,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div className="container">


        {this.state.userReady ? (
          <div>
            <header
              style={{ textAlign: "center", padding: "1%", fontWeight: "bold" }}
            >
              <h3 style={{ marginTop: "2%" }}>Weclome to your profile page</h3>
            </header>

            <div
              class="card mb-3"
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "65%",
              }}
            >
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={currentUser.imageUrl}
                    class="img-fluid rounded-start"
                    alt="..."
                    style={{ width: "50%" }}
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3 class="card-title">
                      <strong>{currentUser.username}</strong>
                    </h3>
                    <p class="card-text">
                      <strong>Email: </strong> {currentUser.email}
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <h4 style={{ textAlign: "center" }}>My Wishlist</h4>

        <Table striped bordered hover style={{ textAlign: "center",width:"100%"}}>
          <div style={{ overflow: "auto", height: "25vh"}}>
            {/* <div style={{width:"100%"}}> */}
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {this.state.wishlistArray.map((item, idx) => (
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
                  <td>{item.price} JD</td>
                </tr>
              ))}
            </tbody>
            {/* </div> */}
          </div>
        </Table>

        <h4 style={{ textAlign: "center" }}>History Purchase</h4>
        <Table striped bordered hover style={{ textAlign: "center"}}>
          <div style={{ overflow: "auto", height: "25vh" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Model</th>
                <th>Color</th>
                <th>Price</th>
              </tr>
            </thead>

            <tbody>
              {this.state.purchaseHistory.map((item, idx) => {
                return (
                  <>
                    <tr>
                      {" "}
                      <td>{idx + 1}</td>
                      <td style={{ width: "15%", height: "15%" }}>
                        <img
                          src={item.imageUrlList[0]}
                          style={{ width: "50%", height: "50%" }}
                          alt=""
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>{item.brand}</td>
                      <td>{item.model}</td>
                      <td>{item.color}</td>
                      <td>{item.price} JD</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </div>
        </Table>
      </div>
    );
  }
}
