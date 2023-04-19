import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'http://127.0.0.1:8080/api/v1/',
  timeout: 5000,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
  },
  withCredentials: true,
};

const api = axios.create(config);

// api.interceptors.request.use();
// api.interceptors.response.use();

export default api;
