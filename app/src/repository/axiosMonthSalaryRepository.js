import axios from '../custom-axios/axios';
import qs from 'qs';

const MonthSalaryService = {
    fetchMonthSalary: (id, month) => {
        return axios.get(`api/monthsSalary/user/${id}/month/${month}`);
    },
    fetchMonthSalaries: (id) => {
        console.log(id);
        return axios.get(`api/monthsSalary/findByEmp/${id}`);
    }
};
export default MonthSalaryService;