import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8081',
  withCredentials: true,
});

API.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
      console.log("we've got a fucking 401");
    }
  }
);

export default API;
