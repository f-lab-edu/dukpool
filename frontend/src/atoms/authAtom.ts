import axios from 'axios';
import { CONFIG } from '@config';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { jwtDecode } from 'jwt-decode';
import {
  ExpiredAccessTokenError,
  ExpiredRefreshTokenError,
  ServerError,
} from '@utils/errors';

type JwtPayload = {
  userId: string;
};

const TOKEN_KEY = 'token';
// primitive atoms
const tokenBaseAtom = atomWithStorage<string | null>(
  TOKEN_KEY,
  localStorage.getItem(TOKEN_KEY) ?? null,
);

// derived atoms

export const tokenAtom = atom<
  [string | null, (newValue: string | null) => void],
  [string | null],
  void
>(
  (get, { setSelf }) => {
    return [get(tokenBaseAtom), setSelf];
  },
  (get, set, value) => {
    set(tokenBaseAtom, value);
  },
);

// axios instance (readOnly)
export const authClientAtom = atom((get) => {
  const token = get(tokenBaseAtom);
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
      if (error.code === 'EXPIRED_ACCESS_TOKEN')
        throw new ExpiredAccessTokenError();
      if (error.code === 'SERVER_ERROR') throw new ServerError();
      if (error.code === 'EXPIRED_REFRESH_TOKEN')
        throw new ExpiredRefreshTokenError();
    },
  );
  return instance;
});

export const noneAuthClientAtom = atom(() => {
  const instance = axios.create({
    baseURL: CONFIG.BASE_URL,
    withCredentials: true,
  });
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      if (error.code === 'SERVER_ERROR') throw new ServerError();
      if (error.code === 'EXPIRED_REFRESH_TOKEN')
        throw new ExpiredRefreshTokenError();
    },
  );
  return instance;
});

// 유저 로그인 유무 (readOnly)
export const loginStatusAtom = atom<boolean>((get) => !!get(tokenBaseAtom));

// 로그인 (writeOnly)
export const loginAtom = atom(null, async (get, set) => {
  const client = get(noneAuthClientAtom);
  const code = new URL(window.location.href).searchParams.get('code');
  const { data } = await client.get(`/auth/kakao/callback?code=${code}`);
  const token = data.data.accessToken;
  set(tokenBaseAtom, token);
});

// 로그 아웃 (writeOnly)
export const logoutAtom = atom(null, (get, set) => {
  set(tokenBaseAtom, null);
});

// 유저 고유 아이디 (from JWT) (readOnly)
export const userUniqIdAtom = atom((get) => {
  const token = get(tokenBaseAtom);
  if (token) {
    const decodeToken = jwtDecode<JwtPayload>(token);
    return decodeToken.userId;
  }
  return null;
});
