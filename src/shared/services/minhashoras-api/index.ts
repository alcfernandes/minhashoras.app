import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const minhasHorasApi = axios.create({
  baseURL: apiUrl,
});
