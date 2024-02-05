import { useMutation } from '@tanstack/react-query';
import { authClientThrowAtom } from '@atoms/authAtom';
import { useAtomCallback } from 'jotai/utils';

export const useDeleteArticle = () => {
  return useMutation({
    mutationKey: ['deleteArticle'],
    mutationFn: useAtomCallback(async (get, set, id: number) => {
      const client = get(authClientThrowAtom);
      return await client.delete(`/article/${id}`);
    }),
  });
};

export const useDeleteArticlePrefer = () => {
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: useAtomCallback(async (get, set, id: number) => {
      const client = get(authClientThrowAtom);
      return await client.delete(`/article/prefer/${id}`);
    }),
  });
};

export const useDeleteArticleComment = () => {
  return useMutation({
    mutationKey: ['deleteArticleComment'],
    mutationFn: useAtomCallback(async (get, set, id: number) => {
      const client = get(authClientThrowAtom);
      return await client.delete(`/article/comment/${id}`);
    }),
  });
};

export const useDeleteTalk = () => {
  return useMutation({
    mutationKey: ['deleteArticle'],
    mutationFn: useAtomCallback(async (get, set, id: number) => {
      const client = get(authClientThrowAtom);
      return await client.delete(`/talk/${id}`);
    }),
  });
};

export const useDeleteTalkPrefer = () => {
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: useAtomCallback(async (get, set, id: number) => {
      const client = get(authClientThrowAtom);
      return await client.delete(`/talk/prefer/${id}`);
    }),
  });
};

export const useDeleteTalkComment = () => {
  return useMutation({
    mutationKey: ['deleteArticleComment'],
    mutationFn: useAtomCallback(async (get, set, id: number) => {
      const client = get(authClientThrowAtom);
      return await client.delete(`/talk/comment/${id}`);
    }),
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: useAtomCallback(async (get) => {
      const client = get(authClientThrowAtom);
      return await client.delete('/users');
    }),
  });
};
