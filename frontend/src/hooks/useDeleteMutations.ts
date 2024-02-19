import { useMutation } from '@tanstack/react-query';
import { ensuredAuthClientAtom } from '@atoms/authAtom';
import { useAtomCallback } from 'jotai/utils';

export const useDeleteArticle = () => {
  return useMutation({
    mutationKey: ['deleteArticle'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/content/${id}`);
    }),
  });
};

export const useDeleteArticlePrefer = () => {
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/like/${id}`);
    }),
  });
};

export const useDeleteArticleComment = () => {
  return useMutation({
    mutationKey: ['deleteArticleComment'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/commentContent/${id}`);
    }),
  });
};

export const useDeleteTalk = () => {
  return useMutation({
    mutationKey: ['deleteTalk'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/talkcontents/${id}`);
    }),
  });
};

export const useDeleteTalkPrefer = () => {
  return useMutation({
    mutationKey: ['deleteTalkPrefer'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/liketalkcontent/${id}`);
    }),
  });
};

export const useDeleteTalkComment = () => {
  return useMutation({
    mutationKey: ['deleteTalkComment'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/commentTalkContent/${id}`);
    }),
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: useAtomCallback((get) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete('/auth');
    }),
  });
};
