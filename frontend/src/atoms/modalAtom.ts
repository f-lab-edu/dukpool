import { atom } from 'jotai';

export const modalStateAtom = atom<boolean>(false);

export const modalAtom = atom<any, any, any>(
  (get) => {
    const modalState = get(modalStateAtom);
    return modalState;
  },
  (get, set, value) => {
    set(modalStateAtom, value);
  },
);
