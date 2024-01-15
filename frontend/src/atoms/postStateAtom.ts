import { atom } from 'jotai';

// primitive atoms
export const titleAtom = atom<string>('');
export const tagsAtom = atom<string[]>([]);
export const contentAtom = atom<string>('');
export const imagesAtom = atom<File[]>([]);

// derived atoms
export const postStateAtom = atom((get) => ({
  title: get(titleAtom),
  tags: get(tagsAtom),
  content: get(contentAtom),
  images: get(imagesAtom),
}));
