import React, {Component, useState, useEffect } from "react";
import Header from "../Header/Header";
import logo from '../LogIn/img/LOGO.png';
import {withRouter, useParams, useHistory} from "react-router-dom";
import './EmployeeHours.css';
import 'font-awesome/css/font-awesome.min.css';
import EmployeeHoursService from '../../repository/axiosEmployeeHoursRepository';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Logo from "./img/slika_page.png"
import slika from "./img/slikaZaUser.png"
import slikaa from "./img/slikaZaPage.png"
import  LOGO from "./img/LOGO.png"
import SLIKA from "./img/SLIKA.png"
import ORG from "./img/SLIKA_LOGO_ORG.png"
import Graph from "../Graph/Graph";
import USER from "./img/user.png"
import Footer from "../Footer/Footer";


const Employees = (props) => {
    const [newEmployee, setNewEmployee] = useState({});
    const [employeeHourPerMonth,setEmployeeHourPerMonth] = useState({});
    const [employeeHourPerYear,setEmployeeHourPerYear] = useState({});
    const [showInputErrors,setShowInputErrors] = useState(false);
    const [startTime,setStartTime] = useState({});
    const [diffValue,setDiffValue] = useState({});
    const [endTime,setEndTime] = useState({});
    const [employee,setEmployee] = useState({});
    const [renderEmployee,setRenderEmployee]=useState(new Date());
    const id = props.location.state.id;
    const history = useHistory();
    const currentDate = new Date();
    let currDay = currentDate.getDate();
    if(currDay.toString().length===1)
        currDay = '0' + currDay;
    let currMonth = currentDate.getMonth()+1;
    if(currMonth.toString().length===1)
        currMonth = '0' + currMonth;
    const modifiedDate = currentDate.getFullYear()+'-'+currMonth+'-'+currDay;
    console.log(modifiedDate);
    const year = currentDate.getFullYear();
    useEffect(() => {
        EmployeeHoursService.fetchEmployee(id).then(employee => {
           setEmployee(employee.data);
           console.log(employee);
        });
        EmployeeHoursService.fetchEmployeeHoursMonthly(id, currMonth).then((response) => {
            console.log(response.data);
            setEmployeeHourPerMonth(response.data);
        });
        EmployeeHoursService.fetchEmployeeHoursYearly(id, year).then(hoursPerYear => {
            setEmployeeHourPerYear(hoursPerYear.data);
        });
        setDiffValue(0);
        setRenderEmployee(new Date());
    }, []);



    const handleChangeInputStart = (e) => {
       if(!validate(e.target.value)) {
           setShowInputErrors(true);
           console.log(validate(e.target.value));
       }
        else {
            setShowInputErrors(false);
            setStartTime(e.target.value);
        }
    };

    const validate = (value) => {
        const reg = /^\d+$/;
        console.log(reg.test(value));
        return reg.test(value);
    };

    const handleChangeInputEnd = (e) => {
        if(!validate(e.target.value)) {
            setShowInputErrors(true);
            console.log(validate(e.target.value));
        }
        else {
            setShowInputErrors(false);
            setEndTime(e.target.value);
        }
    };

    function submitTime() {
        console.log(endTime);
        console.log(startTime);

        if((endTime-startTime)<=0){
            setShowInputErrors(true);
        }
        else {
            console.log(endTime - startTime);
            setDiffValue(endTime - startTime);
            const data = {
                user: employee,
                date: modifiedDate,
                hours: endTime - startTime
            };
            console.log(data);
            EmployeeHoursService.saveEmployeeHours(data).then(r => {
                EmployeeHoursService.fetchEmployeeHoursMonthly(id, currMonth).then((response) => {
                    setEmployeeHourPerMonth(response.data);
                });
                EmployeeHoursService.fetchEmployeeHoursYearly(id, year).then(hoursPerYear => {
                    setEmployeeHourPerYear(hoursPerYear.data);
                });
            });
        }
    }


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
                <div className="col-7 colorCostume pr-0 costumeBR">
                    <h4 id="boja">BUSINESS INTERNET</h4>
                    <p className="fontce">We just need a little information to get </p>
                    <p className="fontce123">started.</p>
                </div>
                <div className="col-5 pl-0 costumeBorder">
                    <img className="slikaa12" src={slikaa}/>
                </div>
            </div>
            <div className="row r123">
                <div className="col-1 colorCostume"></div>
                <div className="col-2 colorCostume">
                    <img className="borderC" id="costumeSlika" src={USER}/>
                </div>

                <div className="col-5 pr-0 colorCostume">
                    <h1 className="naslov">
                        Hello {employee.name}
                    </h1>


                    <div className="mb-4">
                        <h3 className="costUmee">Enter working hours for: <i className="text-muted">{modifiedDate}</i> </h3>
                        <br/>
                        <table id="timeTable tabela_butni">
                            <thead>
                            <tr>
                                <th className="table_header">Start time</th>
                                <th className="table_header">End time</th>
                                <th className="table_header">Hours in total</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className="table_data">
                                    <input className="Time1 text-center" name="start-time" onChange={handleChangeInputStart} placeholder="Enter your start time"/>
                                </td>
                                <td className="table_data">
                                    <input className="Time1 text-center" name="end-time" onChange={handleChangeInputEnd} placeholder="Enter your end time"/>
                                </td>
                                <td className="table_data">
                                    <input type="text text-center" className="Time1" value={diffValue} readOnly={true}/>
                                </td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <td>
                                    {showInputErrors ? <p className="text-danger font-weight-bold">Invalid format!</p> : null}
                                </td><td></td>
                                <td>
                                    <button className="butt"
                                            onClick={submitTime}>Calculate
                                    </button>
                                </td>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div className="col-1 colorCostume "></div>
                <div className="col-3 colorCostume padd">
                    <div className="container12">
                        <div className="box1">
                            <div className="content">
                                <h3>Value your time!</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                </p>
                                <a className="kopce123321" href="">More</a>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <div className="row row1">
                <div className="col-2 colorCostume pt-0 pl-4">

                </div>

            <div className="col-4"></div>
            </div>
            <hr className="hras mt-0 mb-0"/>

            <div className="row r2333 mb-5 pb-5">
                <div className="container1 mt-5">
                    <div className="card">
                        <div className="box">
                            <div className="percent">
                                <svg>
                                    <circle cx="70" cy="70" r="70">
                                        <input type="text" name="month_hours" className="textM" value={employeeHourPerMonth.toString()} readOnly={true}/>
                                    </circle>
                                    <circle cx="70" cy="70" r="70"></circle>
                                </svg>
                                <div className="number">
                                    <h2>{employeeHourPerMonth.toString()}</h2>
                                </div>
                            </div>
                            <h2 className="text">Monthly hours</h2>
                        </div>

                    </div>


                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>

                            </svg>
                            <div className="number">
                                <h2>{employeeHourPerYear.toString()}</h2>
                            </div>
                        </div>
                        <h2 className="text">Yearly hours</h2>
                    </div>

                </div>
                <div className="card">
                    <div className="box">
                        <div className="percent">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>

                            </svg>
                            <div className="number">
                                <h2> {employee.salary}<span>$</span></h2>
                            </div>
                        </div>
                        <h2 className="text">Salary</h2>
                    </div>

                </div>

            </div>

        </div>
            <div className="container mb-5">
    <hr className="hr5"/>
            { employee.id ?
            <Graph employee={employee}/> : null }
            </div>
            <Footer/>
        </div>

    );

}
export default Employees;