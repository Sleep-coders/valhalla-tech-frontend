import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import "bootstrap/dist/css/bootstrap.min.css";
import {Nav,  Card , Container}  from 'react-bootstrap';
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
            isLoggedHistory: false
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
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
                        <header className="jumbotron">
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
                    </div> : null}

                <div>
                    <Container style={{ marginTop: '0px' }}>

                        <Card className="bg-dark text-white" >

                            <Card.Img height="100px" src={this.state.userImg} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>{this.state.userName}</Card.Title>
                            </Card.ImgOverlay>

                        </Card>
                    </Container>

                    <Nav fill variant="tabs" defaultActiveKey="/home" >
                        <Nav.Item onClick={this.handleBasicInfoClick}>
                            <h1>BasicInfo</h1>

                            {
                                this.state.isLoggedBasic && <BasicInfo />

                            }
                        </Nav.Item>

                        <Nav.Item onClick={this.handleWishListClick}>
                            <h1>WishList</h1>
                            {
                                this.state.isLoggedWish && <WishList />

                            }

                        </Nav.Item>

                        <Nav.Item onClick={this.handleHistoryClick}>
                            <h1>History</h1>
                            {
                                this.state.isLoggedHistory && <History />
                            }


                        </Nav.Item>
                    </Nav>
                </div>

            </div>

        );
    }
}