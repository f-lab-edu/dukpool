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
export const defaultClientAtom = atom((get) => {
  get(userUniqIdAtom);
  const instance = axios.create({
    baseURL: CONFIG.BASE_URL,
    withCredentials: true,
  });

  instance.interceptors.request.use((config) => {
    const [token, _] = get(updateTokenAtom);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
      if (data.message === 'Expired AccessToken') {
        const [_, updateToken] = get(updateTokenAtom);
        const { data } = await instance.get(`/auth/refresh`);
        updateToken(data.data);
        return instance.request(originalRequest);
      } else if (data.message === 'Expired RefreshToken') {
        window.localStorage.removeItem(TOKEN_KEY);
        if (CONFIG.ENV === 'development') {
          window.location.href = `${CONFIG.LOCAL}/login`;
        } else if (CONFIG.ENV === 'production') {
          window.location.href = `${CONFIG.DOMAIN}/login`;
        }
        throw new ExpiredRefreshTokenError();
      } else throw new ServerError();
    },
  );
  return instance;
});

export const ensuredAuthClientAtom = atom((get) => {
  const client = get(defaultClientAtom);
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

export const loginAtom = atom(null, async (get) => {
  const client = get(defaultClientAtom);
  const [_, updateToken] = get(updateTokenAtom);
  const code = new URL(window.location.href).searchParams.get('code');
  const { data } = await client.get(`/auth/kakao/callback?code=${code}`);
  const token = data.data.accessToken;
  updateToken(token);
});

export const logoutAtom = atom(null, async (get) => {
  const client = get(ensuredAuthClientAtom);
  await client.post(`/auth/logout`);
  window.localStorage.removeItem(TOKEN_KEY);
  if (CONFIG.ENV === 'development') {
    window.location.href = `${CONFIG.LOCAL}`;
  } else if (CONFIG.ENV === 'production') {
    window.location.href = `${CONFIG.DOMAIN}`;
  }
});

export const withdrawAtom = atom(null, async (get) => {
  const client = get(ensuredAuthClientAtom);
  await client.delete(`/auth`);
  window.localStorage.removeItem(TOKEN_KEY);
  if (CONFIG.ENV === 'development') {
    window.location.href = `${CONFIG.LOCAL}`;
  } else if (CONFIG.ENV === 'production') {
    window.location.href = `${CONFIG.DOMAIN}`;
  }
});

export const userUniqIdAtom = atom((get) => {
  const [token, _] = get(updateTokenAtom);
  if (token) {
    const decodeToken = jwtDecode<JwtPayload>(token);
    return decodeToken.userId;
  }
  return null;
});
