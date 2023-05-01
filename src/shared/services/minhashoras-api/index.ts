import axios from 'axios';

export const minhasHorasApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});
