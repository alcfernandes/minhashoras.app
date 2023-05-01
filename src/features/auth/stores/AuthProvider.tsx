import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface IAuthContext {
  auth: Record<string, unknown>;
  setAuth: Dispatch<SetStateAction<Record<string, unknown>>>;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState({});

  const contextValue = useMemo(() => {
    return { auth, setAuth };
  }, [auth]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
