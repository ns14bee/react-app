import axios from "axios";
import { useToken } from "./useAuthContext";
import { API_URL } from "../utils/enum";

const useAxios = () => {
  const { token } = useToken();

  const axiosInstance = axios.create({
    baseURL: API_URL.BASE_URL,
  });

  axiosInstance.interceptors.request.use((config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return axiosInstance;
};

export default useAxios;
