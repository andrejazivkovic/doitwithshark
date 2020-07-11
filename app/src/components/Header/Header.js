import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
import {Redirect} from "react-router";
import {withRouter} from "react-router-dom";

import EmployeeHoursService from '../../repository/axiosEmployeeHoursRepository';

const Header = (props) => {

    return (

                <div className="navbar navbar-expand navbar-light bg-color pb-0 pt-0">
                    <div className="container-fluid mr-0 ml-0">
                        <ul className="pl-0">
                    <li type="button" className="float-left btn text-white p1 font-weight-bold text-uppercase">Residental</li>
                        <li className="float-left btn text-white p1 font-weight-bold text-uppercase">Business</li>
                        <li className="float-left btn text-white p1 font-weight-bold text-uppercase">Carrier</li>

                        </ul>
                        <button className="btn margina">
                        <span className="loggind">Logged in as : </span><span className="typeCostume">{props.employee.type}</span>
                        </button>
                    <button type="button" className="mr-0 pr-0 float-right pl-5 btn btn-costume" onClick={() => {
                        props.history.push('./');
                    }}>
                        <span className="font-costume"><i className="fa fa-sign-out fa-2x"></i></span>
                    </button>
                    </div>
                </div>
        
    );
};

export default withRouter(Header);
