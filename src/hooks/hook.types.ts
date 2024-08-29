export interface ITokenContextType {
  token: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}
