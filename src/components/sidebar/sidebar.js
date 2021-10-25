<div id="body-pd">
    <header class="header" id="header">
        <div class="header_toggle"> <i class='bx bx-menu' id="header-toggle"></i> </div>
        <div class="header_img"> <img src="https://i.imgur.com/hczKIze.jpg" alt=""/> </div>
    </header>
    <div class="l-navbar" id="nav-bar">
        <nav class="nav">
            <div> <a href="/" class="nav_logo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-alarm" viewBox="0 0 16 16">
  <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
</svg><span class="nav_logo-name"> Valhalla-tech</span> </a>
                <div class="nav_list"> <a href={"/store"} class="nav_link"> <i class='bx bxs-store nav_icon'></i> <span class="nav_name"> Store</span> </a> 
                <a href={"/cart"} class="nav_link"> <i class="bx bxs-cart-alt nav_icon"></i> <span class="nav_name">Cart</span> </a>
                
                 <a href={"/profile"} class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Bookmark</span> </a> 
                 <a href={"/profile"} class="nav_link"> <i class='bx bxs-user-account nav_icon'></i> <span class="nav_name">Profile</span> </a> </div>
                 <a href={"/aboutus"} class="nav_link"> <i class='bx bx-user nav_icon'></i> <span class="nav_name">About us</span> </a> 
                 <a href={"/register"} class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Signup</span> </a> 
            <a href={"/login"} class="nav_link"> <i class='bx bx-bookmark nav_icon'></i> <span class="nav_name">Login</span> </a> 
            </div> <a href={"/logout"} class="nav_link"> <FaList icon="fa-solid fa-arrow-right-to-bracket" /> <span class="nav_name">Log out</span> </a>
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