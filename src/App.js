import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";
import "./components/sidebar/sidebar.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
// import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import StoreMainpage from "./components/store/store.mainpage";

import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Cart from "./components/cart/Cart";


class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        };

    
        
    }
    

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
            });
        }

        EventBus.on("logout", () => {
            this.logOut();
        });
        document.addEventListener("DOMContentLoaded", function(event) {

            const showNavbar = (toggleId, navId, bodyId, headerId) =>{
            const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId)
            
            // Validate that all variables exist
            if(toggle && nav && bodypd && headerpd){
            toggle.addEventListener('click', ()=>{
            // show navbar
            nav.classList.toggle('show')
            // change icon
            toggle.classList.toggle('bx-x')
            // add padding to body
            bodypd.classList.toggle('body-pd')
            // add padding to header
            headerpd.classList.toggle('body-pd')
            })
            }
            }
            
            showNavbar('header-toggle','nav-bar','body-pd','header')
            
            /*===== LINK ACTIVE =====*/
            const linkColor = document.querySelectorAll('.nav_link')
            
            function colorLink(){
            if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
            }
            }
            linkColor.forEach(l=> l.addEventListener('click', colorLink))
            
            // Your code to run since DOM is loaded and ready
            });
    }

    componentWillUnmount() {
        EventBus.remove("logout");
    }

    logOut() {
        AuthService.logout();
        this.setState({
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
        });
    }

    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

        return (
            <div>
                
                <div id="body-pd">
                <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
       
    </header>
                    <div class="l-navbar" id="nav-bar">
                        <nav class="nav">
                            <div>
                                <a href="/" class="nav_logo"><i class='bx bx-layer nav_logo-icon'></i><span class="nav_logo-name">Valhalla-tech</span> </a>
                                {currentUser ? (
                                    <div class="nav_list"> <a href={"/store"} class="nav_link"><i class='bx bxs-store nav_icon'></i> <span class="nav_name"> Store</span> </a>
                                        <a href={"/cart"} class="nav_link"> <i class='bx bxs-cart-add nav_icon'></i> <span class="nav_name">Cart</span> </a>
                                        <a href={"/profile"} class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Wishlist</span> </a>
                                        <a href={"/profile"} class="nav_link"> <i class='bx bxs-user-account nav_icon'></i> <span class="nav_name">Profile</span> </a> </div>
                                ) : (
                                    <a href={"/aboutus"} class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">About us</span> </a>
                                )}
                                {currentUser ? (
                                    <div className="nav_logout"> 
                                    <a href={"/login"} onClick={this.logOut} class="nav_link"><i class='bx bx-door-open nav_icon'></i><span class="nav_name">Log out</span></a>
                                    </div>
                                ) : (
                                    <div>
                                    <a href={"/login"} class="nav_link"> <i class='bx bxs-user-pin nav_icon'></i> <span class="nav_name">Log in</span> </a>
                                    <a href={"/register"} class="nav_link"> <i class='bx bx-disc nav_icon'></i> <span class="nav_name">Sign up</span> </a>
                                    </div>
                                )}
                            </div>
                            {/* create a new home page to the admin */}
                            {showAdminBoard && (
                                <li className="nav_link">
                                    <Link to={"/admin"} className="nav-link">
                                        Admin Board
                                    </Link>
                                </li>)}
                        </nav>
                    </div>
                </div>

                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        {/* <Route exact path="/profile" component={Profile}/> */}
                        <Route exact path="/store" component={StoreMainpage}/>
                        <Route path="/user" component={BoardUser}/>
                        <Route path="/mod" component={BoardModerator}/>
                        <Route path="/admin" component={BoardAdmin}/>
                        <Route exact path="/cart" component={Cart}/>
                    </Switch>
                </div>

                {/* <AuthVerify logOut={this.logOut}/> */}
            </div>
        );
    }
}


export default App;

