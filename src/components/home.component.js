import React, { Component } from "react";

import UserService from "../services/user.service";
import "./home/home.scss";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

    componentDidMount() {
        UserService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    render() {
        return (

           <>
            <div className="container">
                <header className="text-center jumbotron">
                    <h3>{this.state.content}</h3>
                </header>
            </div>
            <div className="overflow-auto customOverFlow" 
        style={{ width: "100%", height: "100%" , textAlign:"center"}}>
            <h1>Hello there !</h1>
                <a style={{width:"50%"}} href={"/register"}  className="btn btn-success"> Join us </a>
            </div>
        </>

        );
    }
}