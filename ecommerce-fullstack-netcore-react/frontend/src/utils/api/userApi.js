import jwtDecode from 'jwt-decode';
import { variables } from './variables.js';
import apiClient from './apiClient.js';

const API_URL = variables.USER_API;

const getUsers = async () => {
  const response = await apiClient.get(`${API_URL}`);
  return response.data;
}

const getUser = async (userId) => {
  const response = await apiClient.get(`${API_URL}/${userId}`);
  return response.data;
}

const createUser = async (user) => {
  const response = await apiClient.post(`${API_URL}`, user);
  return response.data;
}

const updateUser = async (userId, user) => {
  const response = await apiClient.put(`${API_URL}/${userId}`, user);
  return response.data;
}

const deleteUser = async (userId) => {
  const response = await apiClient.delete(`${API_URL}/${userId}`);
  return response.data;
}

const login = async (loginData) => {
  try {
    const response = await apiClient.post(`${API_URL}/login`, loginData);

    if (response.data.token) {
      localStorage.setItem('user', JSON.stringify(response.data));
      const token = response.data.token;
      const decodedToken = jwtDecode(token);
      return decodedToken.nameid;
    }
    return { token: null };
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        alert('Invalid email or password');
      } else {
        alert(`Error: ${error.response.status}`);
      }
    } else {
      alert('An error occurred');
    }
    return { token: null };
  }
};

export default {
  login,
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser
};