export const getLocalStorage = (key: string) => {
  if (typeof window === 'undefined') return undefined;
  const value = localStorage.getItem(key);
  if (!value) return undefined;
  return JSON.parse(value);
};

export const setLocalStorage = <T>(key: string, value: T, defaultValue?: T) => {
  if (typeof window === 'undefined') {
    console.error('can not access without window');
    return;
  }
  localStorage.setItem(key, JSON.stringify(value || defaultValue));
};

export const removeLocalStorage = (key: string) => {
  if (typeof window === 'undefined') {
    console.error('can not access without window');
    return;
  }
  localStorage.removeItem(key);
};
