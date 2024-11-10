import { AxiosRequestConfig } from "axios";

export type THttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export interface ITokenContextType {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export interface IUseApiReturn<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

export interface IUseApiOptions<T> extends AxiosRequestConfig {
  method?: THttpMethod;
  data?: Partial<T>;
}
