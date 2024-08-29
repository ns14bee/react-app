import { LocalStorage } from "./enum";

export const setToken = (token: string) => {
  localStorage.setItem(LocalStorage.AUTH_TOKEN, token);
};

export const getToken = (): string | null => {
  return localStorage.getItem(LocalStorage.AUTH_TOKEN);
};

export const removeToken = () => {
  localStorage.removeItem(LocalStorage.AUTH_TOKEN);
};
