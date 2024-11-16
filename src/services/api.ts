import axios from 'axios';

const API = axios.create({
  baseURL: 'https://engaging-weevil-preferably.ngrok-free.app/api', // Replace with your backend URL
});

// Automatically attach the token to each request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
