import { variables } from './variables.js';
import axios from 'axios';

const API_URL = variables.PRODUCTSIZE_API
const getProductSizes = async () => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

const getProductSizesByProductId = async (productId) => {
  const response = await axios.get(`${API_URL}/${productId}`);
  return response.data;
};

const getProductSize = async (productSizeId) => {
  const response = await axios.get(`${API_URL}/${productSizeId}/size`);
  return response.data;
};

const addProductSize = async (productSizeData) => {
  const response = await axios.post(`${API_URL}`, productSizeData, {
    headers: {
      'Content-Type': 'application/json'  // Thêm Content-Type
    }
  });
  return response.data;
};

const updateProductSize = async (productSizeId, productSizeData) => {
  const response = await axios.put(`${API_URL}/${productSizeId}`, productSizeData, {
    headers: {
      'Content-Type': 'application/json'  // Thêm Content-Type
    }
  });
  console.log("in api", response)
  return response.data;
};

const deleteProductSize = async (productSizeId) => {
  const response = await axios.delete(`${API_URL}/${productSizeId}`);
  return response.data;
};

export default {
    getProductSizes,
    getProductSizesByProductId,
    getProductSize,
    addProductSize,
    updateProductSize,
    deleteProductSize
  };