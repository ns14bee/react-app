import React, { createContext, useState, useContext, ReactNode } from "react";
import {
  setToken as saveToken,
  removeToken as clearToken,
  getToken,
} from "../utils/token";
import { ITokenContextType } from "./hook.types";

const TokenContext = createContext<ITokenContextType | undefined>(undefined);

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(getToken());

  const setToken = (token: string) => {
    saveToken(token);
    setTokenState(token);
  };

  const clearToken = () => {
    clearToken();
    setTokenState(null);
  };

  return (
    <TokenContext.Provider value={{ token, setToken, clearToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = (): ITokenContextType => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useToken must be used within a TokenProvider");
  }
  return context;
};
