import axios from 'axios';

const service = axios.create({
    baseURL: 'http://ceshi13.dishait.cn/admin/',
    timeout: 5000
});

export default service;