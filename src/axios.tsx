import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.github.com', 
  timeout: 5000, 
});

export default axiosInstance;
