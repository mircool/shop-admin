import axios from '~/axios';

function login(username, password) {
    return axios.post('/admin/login', {
        username, password
    })
}

function getinfo() {
    return axios.post('/admin/getinfo')
}

export {login, getinfo}