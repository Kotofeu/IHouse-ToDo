import axios from 'axios';
import { HOST_IP } from '../utils/consts';

export const $conection = axios.create({
    baseURL: HOST_IP
});