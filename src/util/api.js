import axios from 'axios';
import { URL_ENDPOINT } from './url';

const api = axios.create({
    baseURL: URL_ENDPOINT,
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['token'] = `${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;