/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { CONFIG } from '@config';
import { atom, WritableAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { jwtDecode } from 'jwt-decode';
import {
  ExpiredRefreshTokenError,
  ServerError,
  UnAuthorizedError,
} from '@utils/errors';

type JwtPayload = {
  userId: string;
};

const TOKEN_KEY = 'token';

export const atomWithUpdater = <Value, Args extends unknown[], Result>(
  baseAtom: WritableAtom<Value, Args, Result>,
) =>
  atom<readonly [Value, (...args: Args) => Result], Args, Result>(
    (get, { setSelf }) => [get(baseAtom), setSelf],
    (_get, set, ...args) => set(baseAtom, ...args),
  );

// primitive atoms
const tokenBaseAtom = atomWithStorage<string | null>(
  TOKEN_KEY,
  localStorage.getItem(TOKEN_KEY)
    ? JSON.parse(localStorage.getItem(TOKEN_KEY) as string)
    : null,
);

// derived atoms
export const updateTokenAtom = atomWithUpdater(tokenBaseAtom);

// atomEffect
export const authClientAtom = atom((get) => {
  get(userUniqIdAtom);
  const instance = axios.create({
    baseURL: CONFIG.BASE_URL,
  });

  instance.interceptors.request.use((config) => {
    const [token, _] = get(updateTokenAtom);
    config.headers.Authorization = `Bearer ${token}`;
    config.withCredentials = true;
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { config: originalRequest, response } = error;
      const { data } = response;
      if (data.message === 'Unauthorized') {
        const [_, updateToken] = get(updateTokenAtom);
        const { data } = await instance.get(`/auth/refresh`);
        updateToken(data);
        return instance.request(originalRequest);
      }
      if (error.code === 'SERVER_ERROR') throw new ServerError();
      if (error.code === 'EXPIRED_REFRESH_TOKEN')
        throw new ExpiredRefreshTokenError();
    },
  );
  return instance;
});

export const defaultClientAtom = atom((get) => {
  const instance = axios.create({
    baseURL: CONFIG.BASE_URL,
    withCredentials: true,
  });
  instance.interceptors.request.use((config) => {
    const [token, _] = get(updateTokenAtom);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.withCredentials = true;
    }
    return config;
  });
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { config: originalRequest, response } = error;
      const { data } = response;
      if (data.message === 'Unauthorized') {
        const [_, updateToken] = get(updateTokenAtom);
        const { data } = await instance.get(`/auth/accessToken`);
        updateToken(data);
        return instance.request(originalRequest);
      }
      if (error.code === 'SERVER_ERROR') throw new ServerError();
      if (error.code === 'EXPIRED_REFRESH_TOKEN')
        throw new ExpiredRefreshTokenError();
    },
  );
  return instance;
});

export const ensuredAuthClientAtom = atom((get) => {
  const client = get(authClientAtom);
  const isLoggedin = get(loginStatusAtom);
  if (!isLoggedin) {
    throw new UnAuthorizedError();
  }
  return client;
});

export const loginStatusAtom = atom<boolean>((get) => {
  const [token, _] = get(updateTokenAtom);
  return !!token;
});

export const loginAtom = atom(null, async (get, set) => {
  const client = get(defaultClientAtom);
  const [_, updateToken] = get(updateTokenAtom);
  const code = new URL(window.location.href).searchParams.get('code');
  const { data } = await client.get(`/auth/kakao/callback?code=${code}`);
  const token = data.data.accessToken;
  updateToken(token);
});

export const logoutAtom = atom(null, (get, set) => {
  set(tokenBaseAtom, null);
});

export const userUniqIdAtom = atom((get) => {
  const [token, _] = get(updateTokenAtom);
  if (token) {
    const decodeToken = jwtDecode<JwtPayload>(token);
    return decodeToken.userId;
  }
  return null;
});
