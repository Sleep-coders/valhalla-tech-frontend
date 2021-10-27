import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import "./login/login.scss";
import AuthService from "../services/auth.service";
import "../App.css";
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.state = {
            username: "",
            password: "",
            loading: false,
            message: ""
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handleLogin(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.login(this.state.username, this.state.password).then(
                () => {
                    this.props.history.push("/profile");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        return (


            <>
            <div class="wrapper fadeInDown">
  <div id="formContent">
    <h2 class="active h2_login"> Login </h2>
    <div class="fadeIn first">
    <img  src="https://www.designbust.com/download/1439/png/assassins_creed_valhalla_folder_icon256.png"  alt="profile-img" className="profile-img-card"  />      
    </div>
    <Form   onSubmit={this.handleLogin}
                        ref={c => {
                            this.form = c;
                        }}>
                                       <div className="form-group">

      <input type="text" id="login" class="fadeIn second" name="username"
       name="username"
       value={this.state.username}
       onChange={this.onChangeUsername}
       validations={[required]}
       placeholder="login"/>
                  <div className="form-group">
</div>
      <input type="password" id="password" className="fadeIn second" name="password"
        // className="form-control"
        value={this.state.password}
        onChange={this.onChangePassword}
        validations={[required]}
         placeholder="password"/>
</div>
           <div className="form-group">
                            <button
                                className="btn btn-default btnLogin" style={{backgroundColor:"#d9e6f2"}}
                                disabled={this.state.loading}
                            >
                                Login
                                {this.state.loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                
                            </button>
                        </div>

                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                        <div class="text-center w-100">
                                    <p class="text-muted font-weight-bold">Create you account <a href={"/register"} class="text-primary text-center a_login">Signup</a></p>
                                </div>
          
    </Form>


  </div>
</div>
            </>

        
        );
    }
}