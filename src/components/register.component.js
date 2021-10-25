import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import axios from "axios";
import AuthService from "../services/auth.service";
import Button from 'react-bootstrap/Button'
import "./signup/signup.css";
const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = value => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangelastName = this.onChangelastName.bind(this);


        this.state = {
            username: "",
            email: "",
            password: "",
            successful: false,
            message: "",
            firstName :"",
            lastName :"",
            imageUrl : "",
            file : null
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangelastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    fileHandler = async (e) => {
        console.log(e.target.files[0]);
        await this.setState({
          file: e.target.files[0],
        });
      };
    
      fileUploadHandler = () => {
        const imageData = new FormData();
        imageData.append("image", this.state.file);
        axios
          .post(
            `https://api.imgbb.com/1/upload?key=35e78e11c9ee326d3d5820bfb541c27e`,
            imageData,
            {
              onUploadProgress: (progressEvent) => {
                this.setState({
                  uploadMeter: Math.round(
                    (progressEvent.loaded / progressEvent.total) * 100
                  ),
                });
              },
            }
          )
          .then((result) => {
            console.log(result.data);
            this.setState({
              imageUrl: result.data.data.image.url,
            });
            console.log(this.state.imageUrl);
          })
          .catch((error) => {
            console.log(error);
          });
      };
//===================================================================================================
//===================================================================================================
//===================================================================================================
    handleRegister(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            AuthService.register(
                this.state.username,
                this.state.email,
                this.state.password,
                this.state.firstName,
                this.state.lastName,
                this.state.imageUrl
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }
    }

    render() {
        return (
            <>
                <div class="container">
                <div class="row py-5 mt-4 align-items-center">
                    <div class="col-md-5 pr-lg-5 mb-5 mb-md-0">
                        <img src="https://bootstrapious.com/i/snippets/sn-registeration/illustration.svg" alt="" class="img-fluid mb-3 d-none d-md-block"/>
                        <h1>Create an Account</h1>
                        <p class="font-italic text-muted mb-0">Welcome to Valhalla-tech.</p>
                                        </div>
            
                    <div class="col-md-7 col-lg-6 ml-auto">
                        <Form onSubmit={this.handleRegister} ref={c => { this.form = c; }}>
                            {!this.state.successful && (
                            <div class="row">
                                                            <div class="row mb-3 ">

                                <div class="input-group col ">
                                    
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-user text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="firstName" type="text" name="firstName" placeholder="First Name" class="form-control bg-white border-left-0 border-md"
                                    className="form-control"
                                    value={this.state.firstName}
                                    onChange={this.onChangeFirstName}
                                    validations={[required]}
                                    />
                               
                                </div>
            
                                <div class="input-group col w-50">
                                    <div class="input-group-prepend ">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-user text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="lastName" placeholder="Last Name" class="form-control bg-white border-left-0 border-md"
                                     type="text"
                                     className="form-control"
                                     name="lastName"
                                     value={this.state.lastName}
                                     onChange={this.onChangelastName}
                                     validations={[required]}/>
                                </div>
                                </div>
                                <div class="input-group col-lg-6 mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-id-card text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="username" placeholder="Username" class="form-control bg-white border-left-0 border-md"
                                     type="text"
                                     className="form-control"
                                     name="username"
                                     value={this.state.username}
                                     onChange={this.onChangeUsername}
                                     validations={[required, vusername]}
                                     />
                                </div>
            
                                     <div class="input-group col-lg-12 mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-envelope text-muted"></i>
                                        </span>
                                    </div>
                                    <input id="email" type="email" name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md"
                                     className="form-control"
                                     value={this.state.email}
                                     onChange={this.onChangeEmail}
                                     validations={[required, email]}
                                     />
                                </div>   

                                <div class="input-group col-lg-6 mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                            <i class="fa fa-lock text-muted"></i>
                                        </span>
                                    </div>
                                    
                                    <input id="passwordConfirmation" type="password" name="passwordConfirmation" placeholder="Password" class="form-control bg-white border-left-0 border-md"
                                    className="form-control"
                                    value={this.state.password}
                                    onChange={this.onChangePassword}
                                    validations={[required, vpassword]}
                                    />
                                </div>    

                                <div class="input-group col-lg-6 mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text bg-white px-4 border-md border-right-0">
                                        <i class="fa fa-image text-muted"></i>

                                       
                                        </span>
                                    </div>
                                    
                                    <input id="imageUrl" type="file" name="imageUrl" placeholder="Uplode Your Image" class="form-control bg-white border-left-0 border-md"
                                     className="form-control"
                                       onChange={this.fileHandler}
                                       validations={[required]}/>
                                </div>  
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">Sign Up</button>
                                </div>
                                </div>
                                    )}  
                                     {this.state.message && (
                            <div className="form-group">
                                <div
                                    className={
                                        this.state.successful
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                    }
                                    role="alert"
                                >
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
                                <div class="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                                    <div class="border-bottom w-100 ml-5"></div>
                                    <span class="px-2 small text-muted font-weight-bold text-muted">OR</span>
                                    <div class="border-bottom w-100 mr-5"></div>
                                </div>
                        
                                <div class="text-center w-100">
                                    <p class="text-muted font-weight-bold">Already Registered? <a href={"/login"} class="text-primary ml-2">Login</a></p>
                                </div>
            
                        </Form>
                    </div>
                </div>                </div>
            </>
        );
    }
}