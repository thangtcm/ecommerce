import apiClient from './apiClient';
import { variables } from './variables.js';

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
  const response = await apiClient.post(API_URL, product);
  return response.data;
}

const updateProduct = async (productId, product) => {
  const response = await apiClient.put(`${API_URL}/${productId}`, product);
  return response.data;
}

const deleteProduct = async (productId) => {
  const response = await apiClient.delete(`${API_URL}/${productId}`);
  return response.data;
}

export default {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
};