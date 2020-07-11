import axios from '../custom-axios/axios';
import qs from 'qs';

const UserService = {
    fetchUserAuth: (data) => {
        console.log(data);
        return axios.post("api/users/auth", data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    fetchUsers: () => {
        return axios.get('api/users');
    },
    deleteUser: (id) => {
        return axios.delete(`api/users/${id}`);
    },
    saveUser: (data) => {
      return axios.post('/api/users/', data, {
          headers: {
              'Content-Type': 'application/json'
          }
          });
    }
};
export default UserService;