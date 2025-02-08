import axios from 'axios';
import { variables } from './variables.js';

const apiClient = axios.create({
  baseURL: variables.BASE_URL,  
  headers: {
    "Content-Type": "application/json",
  },
});

// apiClient.interceptors.request.use((config) => {
//   const user = JSON.parse(localStorage.getItem('user'));
//   if (user && user.token) {
//     config.headers.Authorization = `Bearer ${user.token}`;
//   }
//   return config;
// }, (error) => Promise.reject(error));

export default apiClient;
