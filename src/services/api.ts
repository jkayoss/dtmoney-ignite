import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://dtmoney-jk.netlify.app/api'
})
