import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import "./App.css";
import AuthService from "./services/auth.service";
import "./components/sidebar/sidebar.css";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import StoreMainpage from "./components/store/store.mainpage";
import AdminMainPage from "./components/admin/admin.mainPage";
import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import Cart from "./components/cart/Cart";
import LabTabs from "./component/Profile";
import AboutUs from "./components/aboutus/aboutus";
import Unauthrized from "./components/error/unauthorized"
class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
            purchaseHistory : [],
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
        document.addEventListener("DOMContentLoaded", function (event) {
            const showNavbar = (toggleId, navId, bodyId, headerId) => {
                const toggle = document.getElementById(toggleId),
                    nav = document.getElementById(navId),
                    bodypd = document.getElementById(bodyId),
                    headerpd = document.getElementById(headerId)
                // Validate that all variables exist
                if (toggle && nav && bodypd && headerpd) {
                    toggle.addEventListener('click', () => {
                        // show navbar
                        nav.classList.toggle('showF')
                        // change icon
                        toggle.classList.toggle('bx-x')
                        // add padding to body
                        bodypd.classList.toggle('body-pd')
                        // add padding to header
                        headerpd.classList.toggle('body-pd')
                    })
                }
            }
            showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
            /*===== LINK ACTIVE =====*/
            const linkColor = document.querySelectorAll('.nav_link')
            function colorLink() {
                if (linkColor) {
                    linkColor.forEach(l => l.classList.remove('active'))
                    this.classList.add('active')
                }
            }
            linkColor.forEach(l => l.addEventListener('click', colorLink))
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
     setPurchaseHistory = (historyDatat) =>{
       this.setState({
          purchaseHistory : historyDatat
       })
    }
    getPurchaseHistory = () =>{
        
           return this.state.purchaseHistory;
    
     }


    render() {
        const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
        return (
            <div>
                <div id="body-pd">
                    <header className="header" id="header">
                        <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
                    </header>
                    <div className="l-navbar" id="nav-bar">
                        <nav className="nav">
                            <div>
                                <a href="/" className="nav_logo"><i className='bx bx-layer nav_logo-icon'></i><span className="nav_logo-name">Valhalla-tech</span> </a>
                                {currentUser ? (
                                    <div className="nav_list"> <a href={"/store"} className="nav_link"><i className='bx bxs-store nav_icon'></i> <span className="nav_name"> Store</span> </a>
                                        <a href={"/cart"} className="nav_link"> <i className='bx bxs-cart-add nav_icon'></i> <span className="nav_name">Cart</span> </a>
                                        <a href={"/profile"} className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Wishlist</span> </a>
                                        <a href={"/profile"} className="nav_link"> <i className='bx bxs-user-account nav_icon'></i> <span className="nav_name">Profile</span> </a> 
                                        <a href={"/aboutus"} className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">About us</span> </a>
                                        </div>
                                ) : (
                                    <a href={"/aboutus"} className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">About us</span> </a>
                                )}
                                {currentUser ? (
                                    <div className="nav_logout">
                                        <a href={"/login"} onClick={this.logOut} className="nav_link"><i className='bx bx-door-open nav_icon'></i><span className="nav_name">Log out</span></a>
                                    </div>
                                ) : (
                                    <div>
                                        <a href={"/login"} className="nav_link"> <i className='bx bxs-user-pin nav_icon'></i> <span className="nav_name">Log in</span> </a>
                                        <a href={"/register"} className="nav_link"> <i className='bx bx-disc nav_icon'></i> <span className="nav_name">Sign up</span> </a>
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
                <Container fluid style={{padding:"0", margin:"0",paddingLeft:"4%"}} className="mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile"> <Profile purchaseHistory={this.state.purchaseHistory}></Profile> </Route>
                        <Route exact path="/store" ><StoreMainpage></StoreMainpage> </Route>
                        <Route path="/user" component={BoardUser} />
                        <Route path="/mod" component={BoardModerator} />
                        <Route path="/cart"> <Cart setPurchaseHistory={this.setPurchaseHistory}></Cart> </Route>
                        <Route path="/aboutus" component={AboutUs} />
                        
                        
                        {showAdminBoard ?  <Route path="/admin" component={BoardAdmin} />: <Unauthrized/>}
                        {showAdminBoard ? <Route path="/admin-page" component={AdminMainPage} />: <Unauthrized/>}
                    </Switch>
                </Container>
                {/* <AuthVerify logOut={this.logOut}/> */}
            </div>
        );
    }
}
export default App;