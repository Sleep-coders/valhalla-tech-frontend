import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Card, Container, Table } from 'react-bootstrap';
import BasicInfo from '../component/BasicInfo';
import History from '../component/History';
import WishList from '../component/WishList';
import { height } from "@mui/system";
import axios from "axios";
import authHeader from "../services/auth-header";


export default class Profile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirect: null,
            userReady: false,
            currentUser: { username: "" },
            userImg: '',
            userName: '',
            isLoggedBasic: true,
            isLoggedWish: false,
            isLoggedHistory: false,
            purchaseHistory: [],
            flag: false,
            wishlistArray:[],
            // isUser : 
        };
    }


    async componentDidMount() {
        const user = AuthService.getCurrentUser();


        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
        let wishlistData = JSON.parse(localStorage.getItem("wishlistItems")) || [];
        await this.setState({
            wishlistArray: wishlistData
        })

        const options = {
            method: "GET",
            url: `http://localhost:8080/users/purchasesHistory/${user.id}`,
            headers: authHeader(),
          };
          axios
            .request(options)
            .then((response) => {
                  this.setState({
                    purchaseHistory:response.data
                  });
              console.log(response.data);
              console.log(this.state.purchaseHistory);

            })
            .catch((err) => {
              console.log(err);
            });


        if (this.state.purchaseHistory.length > 0) {
            this.setState({
                flag: true
            })
        }
    }


    handleBasicInfoClick = () => {
        this.setState({
            isLoggedBasic: true,
            isLoggedWish: false,
            isLoggedHistory: false

        });
    }

    handleWishListClick = () => {
        this.setState({
            isLoggedWish: true,
            isLoggedBasic: false,
            isLoggedHistory: false,
        });
    }

    handleHistoryClick = () => {
        this.setState({
            isLoggedBasic: false,
            isLoggedWish: false,
            isLoggedHistory: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        const { currentUser } = this.state;

        return (
            <div className="container">

                {(this.state.userReady) ?
                    <div>
                        <header style={{textAlign:"center",padding: "1%", fontWeight:"bold"}}>
                            <h3>
                                Weclome to your profile page 
                            </h3>
                        </header>
                        {/* <p>
                            <strong>Token:</strong>{" "}
                            {currentUser.accessToken.substring(0, 20)} ...{" "}
                            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                        </p>
                        <p>
                            <strong>Id:</strong>{" "}
                            {currentUser.id}
                        </p> */}

                        <div class="card mb-3" style={{ marginLeft: "auto", marginRight: "auto", maxWidth: "65%" }}>
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" class="img-fluid rounded-start" alt="..." style={{width:"50%"}} />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title"><strong>{currentUser.username}</strong></h3>
                                        <p class="card-text"><strong>Email: </strong> {currentUser.email}</p>
                                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <p>
                            <strong>Email:</strong>{" "}
                            {currentUser.email}
                        </p>
                        <strong>Authorities:</strong>
                        <ul>
                            {currentUser.roles &&
                                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                        </ul> */}
                    </div> : null}

                <h4 style={{ textAlign: "center" }}>My Wishlist</h4>

                <Table striped bordered hover style={{textAlign:"center"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.wishlistArray.map((item, idx) => (
                            <tr>
                                <td>{idx + 1}</td>
                                <td style={{ width: "15%", height: "15%"}}>
                                    <img
                                        style={{ width: "25%", height: "25%"}}
                                        src={item.image}
                                    ></img>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>

                            </tr>
                        ))}

                    </tbody>
                </Table>

                <h4 style={{ textAlign: "center" }}>History Purchase</h4>
                <Table striped bordered hover>

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
                       
                       {this.state.purchaseHistory.map((item,idx)=>{
                           <tr> <td>
                           {idx + 1}
                       </td>
                           <td>
                               <img src={item.imageUrlList[0]} style={{width:"10%" ,height:"10%"}}></img>
                           </td>
                           <td>
                               {item.name}
                           </td>
                           <td>{item.brand}</td>
                           <td>{item.model}</td>
                           <td>{item.color}</td>
                           <td>{item.price}</td>
                       </tr>
                       })}
                    </tbody>
                </Table>

            </div>

        );
    }
}