import { atom } from 'jotai';

export const isModalOpenAtom = atom<boolean>(false);

export const isConfirmModalAtom = atom<{
  comment: boolean;
  post: boolean;
  resign: boolean;
  login: boolean;
}>({
  comment: false,
  post: false,
  resign: false,
  login: false,
});

export const writeConfirmModalAtom = atom(
  null,
  (
    get,
    set,
    payload: {
      action: 'comment' | 'post' | 'resign' | 'login';
      value: boolean;
    },
  ) => {
    const confirmModalState = get(isConfirmModalAtom);
    set(isConfirmModalAtom, {
      ...confirmModalState,
      [payload.action]: payload.value,
    });
  },
);

export const modalPromiseAtom = atom<{
  resolve: (value?: boolean) => void;
} | null>(null);
