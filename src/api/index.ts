import axios, { AxiosRequestConfig } from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
const config: AxiosRequestConfig = {
  baseURL: 'http://www.ecog99.com/api/v1',
  timeout: 5000,
  // headers: {
  //   'Content-type': 'application/json; charset=UTF-8',
  //   Accept: 'application/json',
  // },
  withCredentials: true,
};

const api = axios.create(config);

// api.interceptors.request.use();
// api.interceptors.response.use();

export default api;
