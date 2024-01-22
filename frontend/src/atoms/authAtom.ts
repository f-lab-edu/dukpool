import { CONFIG } from '@config';
import axios from 'axios';
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  id: number;
};

const TOKEN_KEY = 'token';
// primitive atoms
const tokenAtom = atomWithStorage<string | null>(TOKEN_KEY, null);

// derived atoms

// axios instance (readOnly)
export const clientAtom = atom((get) => {
  const token = get(tokenAtom);
  const instance = axios.create({
    baseURL: CONFIG.BASE_URL,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    withCredentials: true,
  });
  return instance;
});

// 유저 로그인 유무 (readOnly)
export const loginStatusAtom = atom<boolean>((get) => !!get(tokenAtom));

// 로그인 (writeOnly)
export const loginAtom = atom(null, async (get, set) => {
  const client = get(clientAtom);
  const { data } = await client.get(`/auth/kakao`);
  set(tokenAtom, data);
});

// 로그 아웃 (writeOnly)
export const logoutAtom = atom(null, (get, set) => {
  set(tokenAtom, null);
});

// 유저 고유 아이디 (from JWT)
export const userUniqIdAtom = atom((get) => {
  const token = get(tokenAtom);
  if (token) {
    const decodeToken = jwtDecode<JwtPayload>(token);
    return decodeToken.id;
  }
  return null;
});
