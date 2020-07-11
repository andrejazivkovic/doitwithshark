import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    }
});

export default instance;