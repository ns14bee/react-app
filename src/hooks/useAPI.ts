import { useState, useEffect, useCallback } from "react";
import { AxiosResponse } from "axios";
import useAxios from "./useAxios";
import { IUseApiOptions, IUseApiReturn } from "./hook.types";
import { API_ENDPOINTS } from "../utils/enum";

const useApi = <T = unknown>(
  endpoint: API_ENDPOINTS,
  { method = "GET", ...options }: IUseApiOptions<T> = {}
): IUseApiReturn<T> => {
  const axiosInstance = useAxios();
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(
    async (overrideOptions: Partial<IUseApiOptions<T>> = {}) => {
      setLoading(true);
      setError(null);

      try {
        const finalOptions = { ...options, ...overrideOptions, method };
        const response: AxiosResponse<T> = await axiosInstance.request({
          url: endpoint,
          data: finalOptions.data,
          ...finalOptions,
        });
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [axiosInstance, endpoint, method, options]
  );

  useEffect(() => {
    if (method === "GET") {
      console.log("here");
      fetchData();
    }
  }, []);

  return { data, isLoading: loading, error, refetch: fetchData };
};

export default useApi;
