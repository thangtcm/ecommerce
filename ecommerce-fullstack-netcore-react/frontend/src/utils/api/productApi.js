import { variables } from './variables.js';
import apiClient from './apiClient.js';

const API_URL = variables.PRODUCT_API;

const getProducts = async () => {
  const response = await apiClient.get('/products');
  return response.data;
}

const getProduct = async (productId) => {
  const response = await apiClient.get(`/products/${productId}`);
  return response.data;
}

const addProduct = async (product) => {
  const response = await apiClient.post('/products', product);
  return response.data;
}

const updateProduct = async (productId, product) => {
  const response = await apiClient.put(`/products/${productId}`, product);
  return response.data;
}

const deleteProduct = async (productId) => {
  const response = await apiClient.delete(`/products/${productId}`);
  return response.data;
}

export default {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct
};