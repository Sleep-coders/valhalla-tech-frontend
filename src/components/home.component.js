import React, { Component } from "react";
import "./home/home.css";
import "./home/home.scss";

export default class Home extends Component {


    render() {
        return (

            <>

                <div class="background">
                        <span></span>
                        <span className="spanHome"></span>
                        <span className="spanHome"></span>
                        <span className="spanHome"></span>
                        <span className="spanHome"></span>
                        <span className="spanHome"></span>
                        <span className="spanHome"></span>
                        <span className="spanHome"></span>
                        <span className="spanHome"></span>
                    <div className='hero-container'>
                        <img src='https://images5.alphacoders.com/112/thumb-1920-1123549.jpg' className="bg-img" />


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

                            <span className="spanHome"></span>
                            <span className="spanHome"></span>
                            <span className="spanHome"></span>
                            <span className="spanHome"></span>
                            <span className="spanHome"></span>
                            <span className="spanHome"></span>
                            <span className="spanHome"></span>
                            <span className="spanHome"></span>
                            <span className="spanHome"></span>
                            <span className="spanHome"></span>

                        </div>
                    </div>

                </div>


            </>

        );
    }
}