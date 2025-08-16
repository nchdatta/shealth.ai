import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://shealth.ai/api/index.php',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
