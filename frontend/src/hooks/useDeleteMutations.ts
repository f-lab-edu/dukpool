import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ensuredAuthClientAtom } from '@atoms/authAtom';
import { useAtomCallback } from 'jotai/utils';
import { ContentResponse } from 'src/@types/content';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ToastContext } from '@context/ToastContext';

export const useDeleteArticle = () => {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  return useMutation({
    mutationKey: ['deleteArticle'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/content/${id}`);
    }),
    onSuccess: () => {
      navigate(`/article`, { replace: true });
      showToast('게시물이 삭제되었습니다!');
    },
  });
};

export const useDeleteArticlePrefer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteArticlePrefer'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/like/${id}`);
    }),
    onMutate: async (contentId: string) => {
      queryClient.cancelQueries({ queryKey: ['deleteArticlePrefer'] });
      const prevContent = queryClient.getQueryData(['article', contentId]);
      queryClient.setQueryData(
        ['article', contentId],
        (old: ContentResponse) => ({
          ...old,
          isLiked: false,
          likeCount: old.likeCount - 1,
        }),
      );
      return { prevContent };
    },
    onError: (_, contentId, context) => {
      queryClient.setQueryData(['article', contentId], context?.prevContent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['article'] });
    },
  });
};

export const useDeleteArticleComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteArticleComment'],
    mutationFn: useAtomCallback(
      (get, set, { id }: { id: string; contentId: string }) => {
        const client = get(ensuredAuthClientAtom);
        return client.delete(`/commentContent/${id}`);
      },
    ),
    onMutate: async (params: { id: string; contentId: string }) => {
      queryClient.cancelQueries({ queryKey: ['deleteArticleComment'] });
      const prevContent = queryClient.getQueryData([
        'article',
        params.contentId,
      ]);
      queryClient.setQueryData(
        ['article', params.contentId],
        (old: ContentResponse) => ({
          ...old,
          comment: old.comment.filter((t) => t.id !== params.id),
        }),
      );
      return { prevContent };
    },
    onError: (_, params, context) => {
      queryClient.setQueryData(
        ['article', params.contentId],
        context?.prevContent,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['article'] });
    },
  });
};

export const useDeleteTalk = () => {
  const navigate = useNavigate();
  const { showToast } = useContext(ToastContext);
  return useMutation({
    mutationKey: ['deleteTalk'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/talkcontents/${id}`);
    }),
    onSuccess: () => {
      navigate(`/talk`, { replace: true });
      showToast('게시물이 삭제되었습니다!');
    },
  });
};

export const useDeleteTalkPrefer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteTalkPrefer'],
    mutationFn: useAtomCallback((get, set, id: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.delete(`/liketalkcontent/${id}`);
    }),
    onMutate: async (contentId: string) => {
      queryClient.cancelQueries({ queryKey: ['deleteTalkPrefer'] });
      const prevContent = queryClient.getQueryData(['talk', contentId]);
      queryClient.setQueryData(['talk', contentId], (old: ContentResponse) => ({
        ...old,
        isLiked: false,
        likeCount: old.likeCount - 1,
      }));
      return { prevContent };
    },
    onError: (_, contentId, context) => {
      queryClient.setQueryData(['talk', contentId], context?.prevContent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['talk'] });
    },
  });
};

export const useDeleteTalkComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['deleteTalkComment'],
    mutationFn: useAtomCallback(
      (get, set, { id }: { id: string; contentId: string }) => {
        const client = get(ensuredAuthClientAtom);
        return client.delete(`/commentTalkContent/${id}`);
      },
    ),
    onMutate: async (params: { id: string; contentId: string }) => {
      queryClient.cancelQueries({ queryKey: ['deleteTalkComment'] });
      const prevContent = queryClient.getQueryData(['talk', params.contentId]);
      queryClient.setQueryData(
        ['talk', params.contentId],
        (old: ContentResponse) => ({
          ...old,
          comment: old.comment.filter((t) => t.id !== params.id),
        }),
      );
      return { prevContent };
    },
    onError: (_, params, context) => {
      queryClient.setQueryData(
        ['talk', params.contentId],
        context?.prevContent,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['talk'] });
    },
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
