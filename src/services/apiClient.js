import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'digitransit-subscription-key': '3adea1f883ef43f8a0b7e3d1aa3684d0',
  },
});

export default apiClient;
