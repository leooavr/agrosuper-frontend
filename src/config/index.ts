import axios from 'axios';

export const clientBackend = axios.create({
    baseURL: 'http://localhost:4000/',
    timeout: 1000
});
