import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';
import { getLocalStorage } from '@utils/localStorage';
import { CONFIG } from '@config';

type AuthProps = {
  token: string | null;
  isLoggined: boolean;
  client: AxiosInstance | null;
  login: () => void;
  logout: () => void;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const TOKEN_KEY = 'token';

const AuthContext = createContext<AuthProps>({
  token: null,
  isLoggined: false,
  client: null,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [token, setToken] = useState<string | null>(null);
  const [client, setClient] = useState<AxiosInstance | null>(null);
  const isLoggined = !!token;

  const navigate = useNavigate();

  const login = () => {
    navigate('/login');
  };

  const logout = () => {
    setToken(null);
    navigate('/');
  };

  useEffect(() => {
    const token = getLocalStorage(TOKEN_KEY);
    if (token) setToken(token);
  }, []);

  useEffect(() => {
    if (token) {
      const instance = axios.create({
        baseURL: CONFIG.BASE_URL,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setClient(instance);
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, isLoggined, client, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
