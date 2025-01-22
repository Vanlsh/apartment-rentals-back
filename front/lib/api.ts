import axios from 'axios';

export const config = {
  baseURL: process.env.api_url,
};

export const api = axios.create(config);
