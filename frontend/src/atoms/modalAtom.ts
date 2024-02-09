import { atom } from 'jotai';

export const isModalOpenAtom = atom<boolean>(false);

export const isConfirmModalAtom = atom<{
  comment: boolean;
  post: boolean;
  resign: boolean;
}>({
  comment: false,
  post: false,
  resign: false,
});

export const writeConfirmModalAtom = atom(
  null,
  (
    get,
    set,
    payload: { action: 'comment' | 'post' | 'resign'; value: boolean },
  ) => {
    const confirmModalState = get(isConfirmModalAtom);
    if (payload.action === 'comment') {
      set(isConfirmModalAtom, {
        comment: payload.value,
        post: confirmModalState.post,
        resign: confirmModalState.resign,
      });
    }
    if (payload.action === 'post') {
      set(isConfirmModalAtom, {
        comment: confirmModalState.comment,
        post: payload.value,
        resign: confirmModalState.resign,
      });
    }
    if (payload.action === 'resign') {
      set(isConfirmModalAtom, {
        comment: confirmModalState.comment,
        post: confirmModalState.post,
        resign: payload.value,
      });
    }
  },
);
