import React, {Component} from 'react';
import './LogIn.css';
import logo from './img/LOGO.png';
import UserService from "../../repository/axiosUserRepository";
import {Link, Redirect, Route, Router, Switch} from "react-router-dom";

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        let userAuth = { username: this.state.username, password: this.state. password };
        console.log(userAuth);
        UserService.fetchUserAuth(userAuth).then(response => {
            console.log(response);
            if(response.data.type==="ADMIN"){
                this.props.history.push("/employees", { id: response.data.id });
            } else if(response.data.type==="USER"){
                this.props.history.push("/employeeHours", { id: response.data.id });
            }
        })
            .catch(error => {
               console.log(error);
               this.setState({
                   loginErrors: "Invalid username or password"
               })
            });
    }
    render () {
        return (
            <div className=" row r23 boja123">
        <div className="main colorce">
            <div className="row" id="redica">
                <div>
                    <img className="imgLogo" src={logo}/>
                </div>
                <div>
                    <p className="sign">Do it With Shark</p>
                </div>
            </div>
            <form onSubmit={this.handleSubmit} className="form1">
                <input className="un" type="text" align="center" name="username"
                       value={this.state.username} onChange={this.handleChange} placeholder="Username" required/>
                <input className="pass" type="password" align="center" name="password"
                       value={this.state.password} onChange={this.handleChange} placeholder="Password" required/>
                <button type="submit" className="submit text-white text-center">
                    Sign in
                </button>
                <p className="mt-4 text-danger" align="center">{this.state.loginErrors}</p>
            </form>
            <a className="btn1" href="#">
                <i className="fa fa-facebook "></i>
            </a>
            <a className="btn1" href="#">
                <i className="fa fa-instagram"></i>
            </a>
            <a className="btn1" href="#">
                <i className="fa fa-twitter"></i>
            </a>
            <a className="btn1" href="#">
                <i className="fa fa-google-plus"></i>
            </a>
        </div>
            </div>

        );
    }
}
