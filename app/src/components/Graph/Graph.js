import React, {useEffect, useState} from 'react';
import CanvasJSReact from '../../assets/canvasjs.react';
import EmployeeHoursService from "../../repository/axiosEmployeeHoursRepository";
import MonthSalaryService from "../../repository/axiosMonthSalaryRepository";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.employee);
        this.state = {
            isLoaded: false,
            employee: this.props.employee,
            months: [],
            salaries: [],
            currentMonth: new Date().getMonth()+1
        };
    }

    componentDidMount() {
       this.calculate(this.state.employee.id);
    }

    calculate(id) {
        this.setState({
            months: [],
            salaries: []
        });
        let monthsNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        MonthSalaryService.fetchMonthSalaries(id).then(res => {
            EmployeeHoursService.fetchEmployeeHours(id).then(empHours => {
                for (const [index, value] of res.data.entries()) {
                    this.setState({
                        salaries: [...this.state.salaries, {label: monthsNames[value.month-1], y: value.salary, x: value.month-1 }]
                    })
                }
                for (const [index, value] of empHours.data.entries()) {
                    this.setState({
                        months: [...this.state.months, {label: monthsNames[value[1]-1], y: value[0], x: value[1]-1 }]
                    })
                }
                for (const [index, value] of monthsNames.entries()) {
                    if(!this.state.salaries.find(s => s.label.toString() === value)){
                        this.setState({
                            salaries: [...this.state.salaries, { label: value, y: 0, x: index} ]
                        })
                    }
                    if(!this.state.months.find(s => s.label.toString() === value)) {
                        this.setState({
                            months: [...this.state.months, { label: value, y: 0, x: index }]
                        })
                    }
                }
                console.log(this.state.months);
                console.log(this.state.salaries);
            });
        });
    }

    componentWillReceiveProps(someProp, someContext) {
        console.log(someProp);
       this.setState({
           employee: someProp.employee
       });
        this.calculate(someProp.employee.id);
    }

    toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        e.chart.render();
    }

    render() {
        return (
                <CanvasJSChart options = {{
                    title: {
                        text: "DETAILS",
                        fontStyle: "initial"
                    },
                    axisX: {
                        title: "Monthly",
                        titleFontWeight: "normal"
                    },
                    axisY: {
                        title: "Salary",
                        titleFontColor: "blueviolet",
                        lineColor: "blueviolet",
                        labelFontColor: "blueviolet",
                        tickColor: "blueviolet"
                    },
                    axisY2: {
                        title: "Worked Hours",
                        titleFontColor: "darkblue",
                        lineColor: "darkblue",
                        labelFontColor: "darkblue",
                        tickColor: "darkblue"
                    },
                    toolTip: {
                        shared: true
                    },
                    legend: {
                        cursor: "pointer",
                        itemclick: this.toggleDataSeries
                    },
                    data: [{
                            type: "column",
                            name: "Salary in Euros",
                            showInLegend: true,
                            yValueFormatString: "#,##0.# Euros",
                        color:"blueviolet",
                            dataPoints:
                               this.state.salaries
                        },
                            {
                                type: "column",
                                name: "Hours",
                                axisYType: "secondary",
                                showInLegend: true,
                                yValueFormatString: "##0.# Hours",
                                color:"#97e0ff",
                                dataPoints: this.state.months

                            }] }} />
        );
    }
};

export default Graph;
