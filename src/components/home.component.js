import React, { Component } from "react";

import UserService from "../services/user.service";
import "./home/home.css";

export default class Home extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         content: ""
    //     };
    // }

    // componentDidMount() {
    //     UserService.getPublicContent().then(
    //         response => {
    //             this.setState({
    //                 content: response.data
    //             });
    //         },
    //         error => {
    //             this.setState({
    //                 content:
    //                     (error.response && error.response.data) ||
    //                     error.message ||
    //                     error.toString()
    //             });
    //         }
    //     );
    // }

    render() {
        return (

            <>
  <div className='hero-container'>
      <img src='https://images5.alphacoders.com/112/thumb-1920-1123549.jpg'className="bg-img"  />
      <p className="welcome">  SHOP SMART! SHOP IN </p>
      <h1>Valhalla-tech</h1>
      <p className="welcome02">What are you waiting for?</p>
      <div className='hero-btns'>

          <form action="/register" className="btnForm">
      <button class="button-82-pushable" role="button" type="submit">
  <span class="button-82-shadow"></span>
  <span class="button-82-edge"></span>
  <span class="button-82-front text">
    JOIN US NOW
  </span>
</button>
</form>


      </div>
    </div>

            </>

        );
    }
}