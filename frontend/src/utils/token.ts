import {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
} from '@utils/localstorage';

type TokenItem = {
  accessToken: string | undefined;
  refreshToken: string | undefined;
};

const TOKEN_KEY = '@DukpoolToken';

export const getToken = (): TokenItem => {
  const token = getLocalStorage(TOKEN_KEY);
  return token;
};

export const setToken = (token: TokenItem) => {
  setLocalStorage(TOKEN_KEY, token);
};

export const deleteToken = () => {
  removeLocalStorage(TOKEN_KEY);
};
