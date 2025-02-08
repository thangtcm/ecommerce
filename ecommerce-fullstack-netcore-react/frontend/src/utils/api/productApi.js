import apiClient from './apiClient';
import { variables } from './variables.js';
import axios from 'axios';

const API_URL = variables.PRODUCT_API
const getProducts = async () => {
  const response = await apiClient.get(API_URL);
  return response.data;
}

const getProduct = async (productId) => {
  const response = await apiClient.get(`${API_URL}/${productId}`);
  return response.data;
}

const addProduct = async (product) => {
  const response = await apiClient.post(API_URL, product, {
    headers: {
      'Content-Type': 'application/json'  // Thêm Content-Type
    }
  });
  return response.data;
}

const updateProduct = async (productId, product) => {
  const response = await apiClient.put(`${API_URL}/${productId}`, product, {
    headers: {
      'Content-Type': 'application/json'  // Thêm Content-Type
    }
  });
  return response.data;
}

const deleteProduct = async (productId) => {
  const response = await apiClient.delete(`${API_URL}/${productId}`, {
    headers: {
      'Content-Type': 'application/json'  // Thêm Content-Type
    }
  });
  return response.data;
}

export default {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
};