import React, {Component, useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import logo from '../LogIn/img/LOGO.png';
import {withRouter, useParams, useHistory} from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Employees.css';
import img from './imgs/admin_photo.png';
import Employee from "./Employee/Employee";
import UserService from "../../repository/axiosUserRepository";
import 'font-awesome/css/font-awesome.min.css';
import EmployeeHoursService from "../../repository/axiosEmployeeHoursRepository";
import Graph from '../Graph/Graph';
import ORG from "../EmployeeHours/img/SLIKA_LOGO_ORG.png";
import slikaa from "../EmployeeHours/img/slikaZaPage.png";


const Employees = (props) => {
    const [employee, setEmployee] = useState({});
    const [selectedEmployee, setSelectedEmployee]=useState({});
    const [didMount, setDidMount] = useState(false);
    const [newEmployee, setNewEmployee] = useState({});
    const [renderData, setRenderData] = useState(new Date());
    const [showAddButton, setShowAddButton] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [employees,setEmployees] = useState([]);
    const [renderEmployee,setRenderEmployee]=useState(new Date());
    useEffect(() => {
        setDidMount(true);
        EmployeeHoursService.fetchEmployee(props.location.state.id).then(emp => {
            setEmployee(emp.data);
            setSelectedEmployee(emp.data);
        });
        UserService.fetchUsers().then(emps => {
            setEmployees(emps.data);
        });
        return () => setDidMount(false);
    }, [renderData]);

    if(!didMount) {
        return null;
    }

    const handleChange = (e) => {
        const newEmp = {
            ...newEmployee,
            [e.target.name]: e.target.value
        };
        setNewEmployee(newEmp);
    };

    const handleClick = (e) => {
        console.log(e.target);
    };

    return (
            <div>
                <Header employee={employee}/>
                <div className="row r23 colorCostume">
                    <div className="col-1 ml-4 pr-0 ">
                        <img id="slikaLogo" src={ORG}/>
                    </div>
                    <div className="col-2 pl-0 pr-0 ccc">
                        <h3 id="costumeH3">
                            DoItWithShark
                        </h3>
                        <hr id="hrZaLogo"/>
                        <h4 id="costumeH4">
                            b r o a d b r a n d
                        </h4>
                    </div>
                    <div className="col-1 pl-0">
                        <h3 id="unique">
                            BUSINESS
                        </h3>
                    </div>
                    <div className="col-3">

                    </div>
                    <div className=" col-4 middle">
                        <a className="btn1" href="">
                            <i className="fa fa-facebook "></i>
                        </a>
                        <a className="btn1" href="">
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a className="btn1" href="">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn1" href="">
                            <i className="fa fa-google-plus"></i>
                        </a>

                    </div>

                </div>
                <div className="row r23">
                    <div className="col-7 colorCostume pr-0 costumeBorder">
                        <h4 id="boja">BUSINESS INTERNET</h4>
                        <p className="fontce">We just need a little information to get </p>
                        <p className="fontce123">started.</p>
                    </div>
                    <div className="col-5 pl-0 colorCostume costumeBorder">
                        <img className="slikaa12" src={slikaa}/>
                    </div>
                </div>

                <div className="row r1">
                    <div className="col-2"></div>
                    <div className="col-2 pl-5 pr-0 ml-5">
                        <img src={img} className="slikaAdmin"/>
                    </div>
                    <div className="col-4 mt-3">
                        <div>
                        <h1 className=" naslov">
                            Hello {employee.name}
                        </h1>
                        </div>
                    </div>

                </div>
                <div className="row r1">
                    <div className="col-1 ml-5 pl-5"></div>
                    <div className="col-9 pl-5 ml-5">
                        <table className="content-table">
                            <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Salary</th>
                                <td>Username</td>
                                <td>Password</td>
                                <th>Monthly Hours</th>
                                <th>Yearly Hours</th>
                                <th className='text-center'><button type="button" disabled={showAddButton} className='btn' onClick={() => {
                                    setShowAddButton(true);
                                    setShowResults(true);
                                }}>
                                    <i className="fa fa-user-plus text-white fa-2x"></i></button></th>
                            </tr>
                            </thead>
                            <tbody>
                            { showResults ?
                            <tr>
                                    <td><input className="form-control" name="id" type="text" onChange={handleChange} defaultValue="" required/></td>
                                    <td><input className="form-control" name="name" type="text" onChange={handleChange} defaultValue="" required/></td>
                                    <td><input className="form-control" name="surname" type="text" onChange={handleChange} defaultValue="" required/></td>
                                    <td><input className="form-control" name="salary" type="text" onChange={handleChange} defaultValue="" required/></td>
                                    <td><input className="form-control" name="username" type="text" onChange={handleChange} defaultValue="" required/></td>
                                    <td><input className="form-control" name="password" type="text" onChange={handleChange} defaultValue="" required/></td>
                                    <td><input className="form-control" name="monthlyHours" type="text" value='0' disabled={true}/></td>
                                    <td><input className="form-control" name="yearlyHours" type="text" value='0' disabled={true}/></td>
                                    <td><button type="submit" className="btn btn-primary" onClick={() => {
                                        const newEmp = {
                                            ...newEmployee,
                                            type:"USER"
                                        };
                                        UserService.saveUser(newEmp).then(response => {
                                            setShowAddButton(false);
                                            setShowResults(false);
                                            setRenderData(new Date());
                                        });
                                        }
                                    }>Save</button></td>

                                </tr>
                                : null
                            }

                       {  employees.map((employee, index) => {
                           return <Employee employee={employee} key={index} onClick={() => {
                               setSelectedEmployee(employee);
                               console.log(employee);
                           }} onDelete={() => {
                               confirmAlert({
                                   customUI: ({ onClose }) => {
                                       return (
                                           <div className='custom-ui'>
                                               <h1>Are you sure?</h1>
                                               <p>You want to delete this file?</p>
                                               <button className='btn btn-primary mr-2' onClick={onClose}>No</button>
                                               <button className='btn btn-primary'
                                                   onClick={() => {
                                                       UserService.deleteUser(employee.id).then(res => {
                                                           onClose();
                                                           setRenderData(new Date());
                                                       });
                                                   }}
                                               >
                                                   Yes, Delete it!
                                               </button>
                                           </div>
                                       );
                                   }

                               });

                           }}/> }) }

                            </tbody>
                        </table>
                        <div className="mb-3">
                            <hr className="hr5 mt-5"/>
                        { selectedEmployee.id ?
                        <Graph employee={selectedEmployee}/> : null }
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>



        );

};


export default Employees;