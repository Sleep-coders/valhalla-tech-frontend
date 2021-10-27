import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav,  Card , Container,Table}  from 'react-bootstrap';
import BasicInfo from '../component/BasicInfo';
import History from '../component/History';
import WishList from '../component/WishList';

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
            purchaseHistory:[],
            flag: false
        };
    }


    async componentDidMount() {


        const currentUser = AuthService.getCurrentUser();
        console.log(this.state.purchaseHistory);

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })

        let dataHistory = JSON.parse(localStorage.getItem("cartHistory")) || [];
        await this.setState({
            purchaseHistory:dataHistory
        })


        if (this.state.purchaseHistory.length > 0){
            this.setState({
                flag:true
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
                        <header>
                            <h3>
                                <strong>{currentUser.username}</strong> Profile
                            </h3>
                        </header>
                        <p>
                            <strong>Token:</strong>{" "}
                            {currentUser.accessToken.substring(0, 20)} ...{" "}
                            {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                        </p>
                        <p>
                            <strong>Id:</strong>{" "}
                            {currentUser.id}
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            {currentUser.email}
                        </p>
                        <strong>Authorities:</strong>
                        <ul>
                            {currentUser.roles &&
                            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                        </ul>
                    </div>: null}
                    
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
          
            {JSON.parse(localStorage.getItem("wishlistItems")).map((item, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td style={{ width: "15%", height: "15%" }}>
                  <img
                    style={{ width: "50%", height: "50%" }}
                    src={item.imageUrlList}
                  ></img>
                </td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
               
              </tr>
            ))}
            ;
          </tbody>
                </Table>

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
              {this.state.flag && this.state.purchaseHistory.map((item,idx) =>
              (
                  <tr> <td>
                      {idx+1}
                      </td> 
                      <td>
                          <img src={item.imageUrlList[0]}></img>
                      </td>
                      <td>
                          {item.name}
                      </td>
                      <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                      </tr>

              )
            
              
              ) }
          </tbody>

            </div>

        );
    }
}