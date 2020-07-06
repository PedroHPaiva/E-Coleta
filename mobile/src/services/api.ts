import axios from 'axios';

const api = axios.create({
  baseURL: 'http://6fc5e94cf4ad.ngrok.io'
});

export default api;