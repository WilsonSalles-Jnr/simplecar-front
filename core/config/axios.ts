import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000';
  config.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
  config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  config.headers['Access-Control-Allow-Credentials'] = 'true';
return config;
});

export default api;
