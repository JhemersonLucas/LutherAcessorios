import axios from 'axios';

const api = axios.create({
  baseURL: 'https://agroger.com.br/lapp/',
});

export default api;
