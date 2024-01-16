import { atom } from 'jotai';

// primitive atoms
export const titleAtom = atom<string>('');
export const tagsAtom = atom<string[]>([]);
export const contentAtom = atom<string>('');
export const imagesAtom = atom<File[]>([]);

// derived atoms
export const readOnlyTagsAtom = atom((get) => get(tagsAtom));
export const writeOnlyTagsAtom = atom(
  null,
  (get, set, payload: { action: 'add' | 'delete'; tag: string }) => {
    const tags = get(tagsAtom);
    if (payload.action === 'add' && payload.tag) {
      set(tagsAtom, (prev) => [...prev, payload.tag]);
    } else if (payload.action === 'delete' && payload.tag) {
      set(
        tagsAtom,
        tags.filter((tag) => tag !== payload.tag),
      );
    }
  },
);

export const postStateAtom = atom((get) => ({
  title: get(titleAtom),
  tags: get(tagsAtom),
  content: get(contentAtom),
  images: get(imagesAtom),
}));
