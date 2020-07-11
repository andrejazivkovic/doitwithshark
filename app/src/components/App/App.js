import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Router} from "react-router-dom";
import Employees from '../Employees/Employees';
import LogIn from "../LogIn/LogIn";
import EmployeeHours from "../EmployeeHours/EmployeeHours";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: null
        }
    }

    render() {

        return (
            <div className="App">
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact path={"/"}
                            render={props => (
                                <LogIn { ...props } loggedInStatus={ this.state.loggedInStatus } />
                            )} />
                        <Route
                            exact path={"/employees"}
                            render={props => (
                                <Employees { ...props } id={this.state.id} />
                            )} />
                        <Route exact path={"/employeeHours"} component={EmployeeHours} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}
