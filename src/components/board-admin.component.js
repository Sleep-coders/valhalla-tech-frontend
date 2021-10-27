import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

export default class BoardAdmin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        };
    }

   async componentDidMount() {
        UserService.getAdminBoard().then(
            response => {
                this.setState({
                    content: response.data
                });
                // console.log("RESPONSE "+response.data);
            },
            error => {
                this.setState({
                    content:
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString()

                }
                );
                console.log("ERROR: "+error.message);


                if (error.response && error.response.status === 401) {
                    EventBus.dispatch("Logout");
                }
            }
        );
    }

    render() {
        console.log("RESPONSE "+this.state.content);
        // console.log("ERROR: "+this.state.content.data.message);

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>{this.state.content}</h3>
                </header>
            </div>
        );
    }
}