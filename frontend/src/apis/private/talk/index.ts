import TalkApis from '@apis/private/talk/type';
import { AxiosInstance } from 'axios';

const privateTalkApis = (client: AxiosInstance): TalkApis => {
  return {
    postTalk: async (body: FormData): Promise<void> => {
      await client.post('/talk', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    patchTalk: async (id: number, body: FormData): Promise<void> => {
      await client.patch(`/talk/edit/${id}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    },
    deleteTalk: async (id: number): Promise<void> => {
      await client.delete(`/talk/${id}`);
    },

    postTalkPrefer: async (id: number): Promise<void> => {
      await client.post(`/talk/prefer/${id}`);
    },

    deleteTalkPrefer: async (id: number): Promise<void> => {
      await client.delete(`/talk/prefer/${id}`);
    },

    postTalkComment: async (id: number, comment: string): Promise<void> => {
      await client.post(`/talk/comment/${id}`, { comment });
    },

    patchTalkComment: async (id: number, comment: string): Promise<void> => {
      await client.patch(`/talk/comment/${id}`, { comment });
    },

    deleteTalkComment: async (id: number): Promise<void> => {
      await client.delete(`/talk/comment/${id}`);
    },
  };
};

export default privateTalkApis;
