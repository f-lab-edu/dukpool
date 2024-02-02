import { useMutation } from '@tanstack/react-query';
import { authClientThrowAtom } from '@atoms/authAtom';
import { useAtomCallback } from 'jotai/utils';
import privateArticleApis from '@apis/private/article';
import privateTalkApis from '@apis/private/talk';
import privateAuthApis from '@apis/private/auth';

export const useDeleteArticle = () => {
  return useMutation({
    mutationKey: ['deleteArticle'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(authClientThrowAtom);
      const { deleteArticle } = privateArticleApis(client);
      return deleteArticle(id);
    }),
  });
};

export const useDeleteArticlePrefer = () => {
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(authClientThrowAtom);
      const { deleteArticlePrefer } = privateArticleApis(client);
      return deleteArticlePrefer(id);
    }),
  });
};

export const useDeleteArticleComment = () => {
  return useMutation({
    mutationKey: ['deleteArticleComment'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(authClientThrowAtom);
      const { deleteArticleComment } = privateArticleApis(client);
      return deleteArticleComment(id);
    }),
  });
};

export const useDeleteTalk = () => {
  return useMutation({
    mutationKey: ['deleteArticle'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(authClientThrowAtom);
      const { deleteTalk } = privateTalkApis(client);
      return deleteTalk(id);
    }),
  });
};

export const useDeleteTalkPrefer = () => {
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(authClientThrowAtom);
      const { deleteTalkPrefer } = privateTalkApis(client);
      return deleteTalkPrefer(id);
    }),
  });
};

export const useDeleteTalkComment = () => {
  return useMutation({
    mutationKey: ['deleteArticleComment'],
    mutationFn: useAtomCallback((get, set, id: number) => {
      const client = get(authClientThrowAtom);
      const { deleteTalkComment } = privateTalkApis(client);
      return deleteTalkComment(id);
    }),
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationKey: ['deleteUser'],
    mutationFn: useAtomCallback((get) => {
      const client = get(authClientThrowAtom);
      const { deleteUser } = privateAuthApis(client);
      return deleteUser();
    }),
  });
};
