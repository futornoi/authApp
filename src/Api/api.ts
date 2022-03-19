import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";

const API_URL = 'http://localhost:3001';

const handlerSuccess = (res: AxiosResponse) => res.data;
const handlerError = (err: AxiosError) => Promise.reject(err.response?.data);

const instance = axios.create({
  baseURL: API_URL,
  responseType: 'json',
  withCredentials: false,
  headers: {
    'Accept': 'application/json',
    "Access-Control-Allow-Headers": "*",
  },
})

instance.interceptors.request.use((config) => {
  const token = Cookies.get("apiToken") || null

  if (token) config.headers = {
    ...config.headers,
    Authorization: `Bearer ${token}`
  };
  return config;

},(error) => {

  return Promise.reject(error);
});

export const ApiCall = (method: 'get' | 'post' | 'delete', url: string, data?: any) => instance[method](url, data)
  .then(handlerSuccess)
  .catch(handlerError);