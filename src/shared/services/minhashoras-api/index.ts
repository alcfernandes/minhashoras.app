import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

export const minhasHorasApiPublic = axios.create({
  baseURL: apiUrl,
});

export const minhasHorasApiPrivate = axios.create({
  baseURL: apiUrl,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
