import React, {Component} from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AuthService from "./services/auth.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import StoreMainpage from "./components/store/store.mainpage";

import { useState } from "react";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";
import {FaList, FaRegHeart, FaShoppingBasket, FaSign} from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import {BiCog, BiRegistered, BiSave, BiShoppingBag} from "react-icons/bi";


import "react-pro-sidebar/dist/css/styles.css";
import "./components/sidebar/SideNavbar.css";

import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import {BsShop, IoEnter} from "react-icons/all";


class App extends Component {
    
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined,
            menuCollapse: true,
        }
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
            
            const linkColor = document.querySelectorAll('.nav_link')
            
            function colorLink(){
            if(linkColor){
            linkColor.forEach(l=> l.classList.remove('active'))
            this.classList.add('active')
            }
            }
            linkColor.forEach(l=> l.addEventListener('click', colorLink))
            
            });
    }
    
    setCollapseMenu=(flag)=>{
        this.setState({
            menuCollapse:flag
        })
        console.log("clicked");
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
    
    menuIconClick = () => {
        this.state.menuCollapse ? this.setCollapseMenu(false) : this.setCollapseMenu(true);
    };

    render() {
        const {currentUser, showModeratorBoard, showAdminBoard} = this.state;

        return (
            <div id="body-pd">
    <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""/> </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> <a href="/" class="nav_logo"> <i class='bx bx-layer nav_logo-icon'></i> <span class="nav_logo-name">Valhalla-tech</span> </a>
                <div class="nav_list"> <a href={"/store"} class="nav_link active"> <i class='bx bxs-store nav_icon'></i> <span class="nav_name"> Store</span> </a> 
                <a href={"/cart"} class="nav_link"> <i class="bx bxs-cart-alt nav_icon"></i> <span class="nav_name">Cart</span> </a>
                
                 <a href={"/profile"} class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Bookmark</span> </a> 
                 <a href={"/profile"} class="nav_link"> <i class='bx bxs-user-account nav_icon'></i> <span class="nav_name">Profile</span> </a> </div>
                 <a href={"/profile"} class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">About us</span> </a> 
            </div> <a href={"/logout"} class="nav_link"> <i class='bx bx-log-out nav_icon'></i> <span class="nav_name">Log out</span> </a>
        </nav>
    </div>
    <div class="height-100">
               {/* <ProSidebar collapsed={this.state.menuCollapse}>
                   <SidebarHeader>
                   <header className="slider">
                        <div className="logo-details">
                            <i className='bx bxl-c-plus-plus icon'></i>
                            <div className="logo_name">Valhalla-tech</div>
                        <div className="closemenu" onClick={this.menuIconClick} >
                            <i className='bx bx-menu' id="btn"></i>
                        </div>
                        </div>
                    </header>
                   </SidebarHeader>
                   <SidebarContent>
                       <Menu>
                           <MenuItem active={true} onClick={this.onHandleClick} icon={< FiHome style={{fontSize:'24px'}}/>}><a href={"/home"}>HOME </a></MenuItem>
                           <MenuItem onClick={this.onHandleClick} icon={<BsShop style={{fontSize:'24px'}}/>}><a href={"/store"}>Store </a></MenuItem>
                           <MenuItem onClick={this.onHandleClick} icon={<IoEnter style={{fontSize:'24px'}}/>}><a href={"/register"}>Sign up </a></MenuItem>
                           <MenuItem onClick={this.onHandleClick} icon={<IoEnter style={{fontSize:'24px'}}/>}><a href={"/login"}>Login </a></MenuItem>
                           <MenuItem onClick={this.onHandleClick} icon={<BiShoppingBag style={{fontSize:'24px'}}/>}><a href={"/cart"}>Cart </a></MenuItem>
                           {showModeratorBoard &&(
                           <MenuItem onClick={this.onHandleClick} icon={<RiPencilLine style={{fontSize:'24px'}}/>}><a href={"/mod"}>Mod Profile </a></MenuItem>
                           )}
                           {showAdminBoard &&(
                               <MenuItem onClick={this.onHandleClick} icon={<RiPencilLine style={{fontSize:'24px'}}/>}><a href={"/admin"}>Admin profile </a></MenuItem>
                           )}
                           {currentUser &&(
                            <MenuItem onClick={this.onHandleClick} icon={<RiPencilLine style={{fontSize:'24px'}}/>}><a href={"/user"}>User Profile </a></MenuItem>
                           )}
                               <MenuItem onClick={this.onHandleClick} icon={<BiCog style={{fontSize:'24px'}}/>}><a href={"/aboutus"}>About us </a></MenuItem>
                           </Menu>
                   </SidebarContent>
               </ProSidebar> */}
                <div className="container mt-3">
                    <Switch>
                        <Route exact path={["/", "/home"]} component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/store" component={StoreMainpage}/>
                        <Route path="/user" component={BoardUser}/>
                        <Route path="/mod" component={BoardModerator}/>
                        <Route path="/admin" component={BoardAdmin}/>
                    </Switch>
                </div>

                <AuthVerify logOut={this.logOut}/>
                    </div>

            </div>
        );
    }
}


export default App;