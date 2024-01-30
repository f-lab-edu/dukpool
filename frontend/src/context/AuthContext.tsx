import { createContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosInstance } from 'axios';
import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from '@utils/localstorage';
import { ServerError, ExpiredRefreshTokenError } from '@utils/errors';
import { CONFIG } from '@config';

type AuthProps = {
  token: string | null;
  isLoggined: boolean;
  client: AxiosInstance | null;
  login: () => Promise<void>;
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
  login: async () => {},
  logout: () => {},
});

const AuthProvider = ({ children }: Props): JSX.Element => {
  const [token, setToken] = useState<string | null>(getLocalStorage(TOKEN_KEY));
  const isLoggined = !!token;

  const navigate = useNavigate();

  const login = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const { data } = await client.get(`/auth/kakao/callback?code=${code}`);
    const token = data.data.accessToken;
    setToken(token);
    setLocalStorage(TOKEN_KEY, token);
  };

  const logout = () => {
    setToken(null);
    removeLocalStorage(TOKEN_KEY);
    navigate('/');
  };

  const client = useMemo(() => {
    const instance = axios.create({
      baseURL: CONFIG.BASE_URL,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
      withCredentials: true,
    });
    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const { config: originalRequest } = error;
        if (error.code === 'EXPIRED_ACCESS_TOKEN') {
          removeLocalStorage(TOKEN_KEY);
          const { data } = await client.get(`/auth/token`);
          setToken(data);
          return client.request(originalRequest);
        }
        if (error.code === 'SERVER_ERROR') throw new ServerError();
        if (error.code === 'EXPIRED_REFRESH_TOKEN')
          throw new ExpiredRefreshTokenError();
      },
    );
    return instance;
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, isLoggined, client, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
