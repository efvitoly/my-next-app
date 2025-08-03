import axios from 'axios';

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Tipleri dışa aktarmak istersen (isteğe bağlı)
export type APIResponse<T> = {
  data: T;
};

export default API;
