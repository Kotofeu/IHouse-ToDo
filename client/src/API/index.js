import axios from 'axios';

export const $conection = axios.create({
    baseURL: 'http://localhost:5000/'
});