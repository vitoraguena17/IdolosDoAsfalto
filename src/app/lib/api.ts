import axios from 'axios';

export const api = axios.create({
  baseURL: '[https://jolpi.ca/ergast/f1/](https://jolpi.ca/ergast/f1/)', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Erro na requisição da API:', error);
    return Promise.reject(error);
  }
);