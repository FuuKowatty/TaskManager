import axios, { AxiosHeaders } from "axios"
import Cookies from "js-cookie"


export const apiClient = () => {
    const token = Cookies.get('token');
    const headers: { Authorization?: string } = {};
  
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
  
    return axios.create({ headers });
  };
  