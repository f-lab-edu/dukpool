import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useAtomCallback } from 'jotai/utils';
import { ensuredAuthClientAtom } from '@atoms/authAtom';
import { useNavigate } from 'react-router-dom';
import { ContentResponse } from 'src/@types/content';
import assert from 'assert';
import { useContext } from 'react';
import { ToastContext } from '@context/ToastContext';

type ContentParams = {
  id: string;
  body: FormData;
};

type CommentParams = {
  id: string;
  desc: string;
  content: string;
};

export const usePatchArticle = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['patchArticle'],
    mutationFn: useAtomCallback((get, set, { id, body }: ContentParams) => {
      const client = get(ensuredAuthClientAtom);
      return client.patch(`/content/${id}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }),
    onSettled: (status, _, { id }: ContentParams) => {
      navigate(`/article/${id}`);
      queryClient.invalidateQueries({ queryKey: ['article', id] });
    },
  });
};

export const usePatchArticleComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['patchArticleComment'],
    mutationFn: useAtomCallback(
      (get, set, { id, desc, content }: CommentParams) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/commentContent/${id}`, { desc, content });
      },
    ),
    onMutate: async ({ id, desc, content }: CommentParams) => {
      queryClient.cancelQueries({ queryKey: ['patchArticleComment'] });
      const prevContent = queryClient.getQueryData<ContentResponse>([
        'article',
        content,
      ]);
      assert(prevContent);
      const updatedComment = {
        id,
        createdAt: prevContent.createdAt,
        updatedAt: prevContent.updatedAt,
        desc,
        writer: prevContent.comment.find((comment) => comment.id === id)
          ?.writer,
      };
      const updatedComments = prevContent.comment.map((comment) =>
        comment.id === id ? updatedComment : comment,
      );
      queryClient.setQueryData(
        ['article', content],
        (old: ContentResponse) => ({
          ...old,
          comment: updatedComments,
        }),
      );
      return { prevContent };
    },
    onError: (_, params, context) => {
      queryClient.setQueryData(
        ['article', params.content],
        context?.prevContent,
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['article'] });
    },
  });
};

export const usePatchTalk = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ['patchTalk'],
    mutationFn: useAtomCallback((get, set, { id, body }: ContentParams) => {
      const client = get(ensuredAuthClientAtom);
      return client.patch(`/talkcontents/${id}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }),
    onSuccess: (_, { id }: ContentParams) => {
      navigate(`/talk/${id}`, { replace: true });
    },
  });
};

export const usePatchTalkComment = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['patchTalkComment'],
    mutationFn: useAtomCallback(
      (get, set, { id, desc, content }: CommentParams) => {
        const client = get(ensuredAuthClientAtom);
        return client.patch(`/commentTalkContent/${id}`, { desc, content });
      },
    ),
    onMutate: async ({ id, desc, content }: CommentParams) => {
      queryClient.cancelQueries({ queryKey: ['patchTalkComment'] });
      const prevContent = queryClient.getQueryData<ContentResponse>([
        'talk',
        content,
      ]);
      assert(prevContent);
      const updatedComment = {
        id,
        createdAt: prevContent.createdAt,
        updatedAt: prevContent.updatedAt,
        desc,
        writer: prevContent.comment.find((comment) => comment.id === id)
          ?.writer,
      };
      const updatedComments = prevContent.comment.map((comment) =>
        comment.id === id ? updatedComment : comment,
      );
      queryClient.setQueryData(['talk', content], (old: ContentResponse) => ({
        ...old,
        comment: updatedComments,
      }));
      return { prevContent };
    },
    onError: (_, params, context) => {
      queryClient.setQueryData(['talk', params.content], context?.prevContent);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['talk'] });
    },
  });
};

export const usePatchNickname = () => {
  const queryClient = useQueryClient();
  const { showToast } = useContext(ToastContext);
  return useMutation({
    mutationKey: ['patchNickname'],
    mutationFn: useAtomCallback((get, set, nickname: string) => {
      const client = get(ensuredAuthClientAtom);
      return client.patch(`/auth`, { nickname });
    }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
    onSuccess: () => {
      showToast('닉네임이 변경되었습니다!');
    },
  });
};
