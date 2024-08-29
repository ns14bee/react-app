import axios from "axios";
import { useToken } from "../hooks/useAuthContext";

const useAxios = () => {
  const { token } = useToken();

  const axiosInstance = axios.create({
    baseURL: "https://your-api.com",
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
