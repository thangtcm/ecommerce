import apiClient from './apiClient';
import { variables } from './variables.js';
import axios from 'axios';

const API_URL = variables.ORDERITEM_API

const getOrderItems = async () => {
  const response = await apiClient.get(`${API_URL}`);
  return response.data;
};

const getOrderItemsByOrderId = async (orderId) => {
  const response = await apiClient.get(`${API_URL}/${orderId}`);
  return response.data;
};

const addOrderItem = async (orderItemData) => {
  const response = await apiClient.post(`${API_URL}`, orderItemData, {
    headers: {
      'Content-Type': 'application/json'  // Thêm Content-Type
    }
  });
  return response.data;
};

const updateOrderItem = async (orderItemId, orderItemIata) => {
  const response = await apiClient.put(`${API_URL}/${orderItemId}`, orderItemIata, {
    headers: {
      'Content-Type': 'application/json'  // Thêm Content-Type
    }
  });
  return response.data;
};

const deleteOrderItem = async (productSizeId) => {
  const response = await apiClient.delete(`${API_URL}/${productSizeId}`, {
    headers: {
      'Content-Type': 'application/json'  // Thêm Content-Type
    }
  });
  return response.data;
};

export default {
    getOrderItems,
    getOrderItemsByOrderId,
    addOrderItem,
    updateOrderItem,
    deleteOrderItem
  };