import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
});

axiosInstance.interceptors.response.use((response) => {
  // console.log(response.status);
  return response;
});

export default axiosInstance;
