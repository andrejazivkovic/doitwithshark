import axios from '../custom-axios/axios';
import qs from 'qs';

const EmployeeHoursService = {
    fetchEmployeeHoursMonthly: (id, month) => {
        return axios.get(`api/employeeHours/user/${id}/month/${month}`);
    },
    fetchEmployeeHoursYearly: (id, year) => {
        console.log(id + " " + year);
        return axios.get(`api/employeeHours/user/${id}/year/${year}`);
    },
    fetchEmployeeHours: (id) => {
        console.log(id);
        return axios.get(`api/employeeHours//findByEmp/${id}`);
    },
    fetchEmployee: (id) => {
        console.log(id);
        return axios.get(`api/users/${id}/`);
    },
    saveEmployeeHours: (data) => {
        console.log(data);
        return axios.post("api/employeeHours", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
export default EmployeeHoursService;