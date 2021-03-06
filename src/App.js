import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
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
import EventBus from "./common/EventBus";
import Cart from "./components/cart/Cart";
import AboutUs from "./components/aboutus/aboutus";
import Unauthrized from "./components/error/unauthorized";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
        document.addEventListener("DOMContentLoaded", function (event) {
            const showNavbar = (toggleId, navId, bodyId, headerId) => {
                const toggle = document.getElementById(toggleId),
                    nav = document.getElementById(navId),
                    bodypd = document.getElementById(bodyId),
                    headerpd = document.getElementById(headerId)
                if (toggle && nav && bodypd && headerpd) {
                    toggle.addEventListener('click', () => {
                        nav.classList.toggle('showF')
                        toggle.classList.toggle('bx-x')
                        bodypd.classList.toggle('body-pd')
                        headerpd.classList.toggle('body-pd')
                    })
                }
            }
            showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')
            const linkColor = document.querySelectorAll('.nav_link')
            function colorLink() {
                if (linkColor) {
                    linkColor.forEach(l => l.classList.remove('active'))
                    this.classList.add('active')
                }
            }
            linkColor.forEach(l => l.addEventListener('click', colorLink))
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
        const { currentUser, showAdminBoard } = this.state;
        return (
            <div>
                <div id="body-pd">
                    <div className="l-navbar" id="nav-bar">
                        <nav className="nav">
                            <div> 
                                <a href="/" className="nav_logo"><i class="bi bi-columns-gap nav_logo-icon"></i><span className="nav_logo-name">Valhalla-tech</span> </a>
                                <br/>
                                {currentUser ? (               
                                    <div className="nav_list"> <a href={"/store"} className="nav_link"><i className='bx bxs-store nav_icon'></i> <span className="nav_name"> Store</span> </a>
                                        <a href={"/cart"} className="nav_link"> <i class="bi bi-cart3 nav_icon"></i><span className="nav_name">Cart</span> </a>
                                        <a href={"/profile"} className="nav_link"> <i className='bx bx-bookmark nav_icon'></i> <span className="nav_name">Wishlist</span> </a>
                                        <a href={"/profile"} className="nav_link"> <i className='bx bxs-user-account nav_icon'></i> <span className="nav_name">Profile</span> </a> 
                                        {showAdminBoard && ( <a href={"/admin-page"} className="nav_link"><i class="bi bi-bar-chart-line-fill nav_icon"></i>Admin Board</a>)} 
                                        <a href={"/aboutus"} className="nav_link"> <i className='bx bx-user nav_icon'></i> <span className="nav_name">About us</span> </a>
                                        </div>
                                ) : (
                                    <a href={"/aboutus"} className="nav_link"> <i class="bi bi-people-fill nav_icon"></i> <span className="nav_name">About us</span> </a>
                                )}
                                {currentUser ? (
                                    <div className="nav_logout">
                                        <a href={"/login"} onClick={this.logOut} className="nav_link"><i class="bi bi-door-open nav_icon"></i><span className="nav_name">Log out</span></a>
                                    </div>
                                ) : (
                                    <div>
                                        <a href={"/login"} className="nav_link"><i class="bi bi-box-arrow-in-right nav_icon"></i> <span className="nav_name">Log in</span> </a>
                                        <a href={"/register"} className="nav_link"><i class="bi bi-signpost-2 nav_icon"></i> <span className="nav_name">Sign up</span> </a>
                                    </div>
                                )}
                            </div>
                        </nav>
                    </div>
                </div>
                <Container fluid style={{padding:"0", margin:"0",paddingLeft:"4%"}} className="mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/profile"> <Profile ></Profile> </Route>
                        <Route exact path="/store" ><StoreMainpage></StoreMainpage> </Route>
                        <Route path="/user" component={BoardUser} />
                        <Route path="/mod" component={BoardModerator} />
                        <Route path="/cart"> <Cart setPurchaseHistory={this.setPurchaseHistory}></Cart> </Route>
                        <Route path="/aboutus" component={AboutUs} />
                        
                        
                        {showAdminBoard ?  <Route path="/admin" component={BoardAdmin} />: <Unauthrized/>}
                        {showAdminBoard ? <Route path="/admin-page" component={AdminMainPage} />: <Unauthrized/>}
                    </Switch>
                </Container>
            </div>
        );
    }
}
export default App;
