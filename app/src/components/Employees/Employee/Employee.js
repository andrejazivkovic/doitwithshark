import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'
import './Employee.css';
import 'font-awesome/css/font-awesome.min.css';
import EmployeeHoursService from "../../../repository/axiosEmployeeHoursRepository";
import UserService from "../../../repository/axiosUserRepository";
class Employee extends React.Component {

    constructor(props) {
        super(props);
            this.state={
                    monthlyHours: 0,
                    yearlyHours: 0,
                    month: new Date().getMonth()+1,
                    year: new Date().getFullYear()
                };
    }
    componentDidMount() {
        EmployeeHoursService.fetchEmployeeHoursMonthly(this.props.employee.id, this.state.month).then(monthH => {
            EmployeeHoursService.fetchEmployeeHoursYearly(this.props.employee.id, this.state.year).then(yearH => {
                this.setState({
                    monthlyHours: monthH.data,
                    yearlyHours: yearH.data,
                    month: new Date().getMonth()+1,
                    year: new Date().getFullYear()
                });
            });
        })
    }

    onDelete() {

    }

    render() {
        return (
            <tr>
                <td>{this.props.employee.id}</td>
                <td>{this.props.employee.name}</td>
                <td>{this.props.employee.surname}</td>
                <td>{this.props.employee.salary}</td>
                <td>{this.props.employee.username}</td>
                <td>{this.props.employee.password}</td>
                <td>{this.state.monthlyHours}</td>
                <td>{this.state.yearlyHours}</td>
                <td>
                    <button type="button" className="btn" onClick={this.props.onClick}>
                        <i className="fa fa-bar-chart"></i>
                    </button>
                    <button type="button" className="btn" onClick={this.props.onDelete}>
                        <i className="fa fa-user-times text-black-50"></i></button>
                </td>
            </tr>
        )
    }
}

export default withRouter(Employee);