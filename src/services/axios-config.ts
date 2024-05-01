import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api',
  headers: {
    'Content-Type': 'application/json',
    Origin: 'http://localhost:3000',
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
