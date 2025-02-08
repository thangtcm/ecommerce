import apiClient from './apiClient';

const getProductSizes = async () => {
  const response = await apiClient.get(`${API_URL}`);
  return response.data;
};

const getProductSizesByProductId = async (productId) => {
  const response = await apiClient.get(`${API_URL}/${productId}`);
  return response.data;
};

const getProductSize = async (productSizeId) => {
  const response = await apiClient.get(`${API_URL}/${productSizeId}/size`);
  return response.data;
};

const addProductSize = async (productSizeData) => {
  const response = await apiClient.post(`${API_URL}`, productSizeData);
  return response.data;
};

const updateProductSize = async (productSizeId, productSizeData) => {
  const response = await apiClient.put(`${API_URL}/${productSizeId}`, productSizeData);
  console.log("in api", response)
  return response.data;
};

const deleteProductSize = async (productSizeId) => {
  const response = await apiClient.delete(`${API_URL}/${productSizeId}`);
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