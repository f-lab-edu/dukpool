import { useMutation } from '@tanstack/react-query';
import { ensuredAuthClientAtom } from '@atoms/authAtom';
import { useAtomCallback } from 'jotai/utils';

export const useDeleteArticle = () => {
  return useMutation({
    mutationKey: ['deleteArticle'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/article/${id}`);
    }),
  });
};

export const useDeleteArticlePrefer = () => {
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/article/prefer/${id}`);
    }),
  });
};

export const useDeleteArticleComment = () => {
  return useMutation({
    mutationKey: ['deleteArticleComment'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/article/comment/${id}`);
    }),
  });
};

export const useDeleteTalk = () => {
  return useMutation({
    mutationKey: ['deleteArticle'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/talk/${id}`);
    }),
  });
};

export const useDeleteTalkPrefer = () => {
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/talk/prefer/${id}`);
    }),
  });
};

export const useDeleteTalkComment = () => {
  return useMutation({
    mutationKey: ['deleteArticleComment'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/talk/comment/${id}`);
    }),
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: useAtomCallback((get) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete('/users');
    }),
  });
};
