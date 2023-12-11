export const getLocalStorage = (key: string) => {
  const value = localStorage.getItem(key);
  if (!value) return undefined;
  return JSON.parse(value);
};

export const setLocalStorage = <T>(key: string, value: T, defaultValue?: T) => {
  localStorage.setItem(key, JSON.stringify(value || defaultValue));
};

export const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};
