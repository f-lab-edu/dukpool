import useClient from '@hooks/useClient';
import {
  MOCK_TALK_DATA,
  MOCK_TALK_POST_DATA,
  TalkProps,
} from '@utils/mockData';

type TalkApis = {
  getAllTalks: (sortType: string) => Promise<TalkProps[]>;
  getTalk: (talkId: number) => Promise<any>;
  postTalk: (body: FormData) => Promise<any>;
  patchTalk: (id: number, body: FormData) => Promise<any>;
  deleteTalk: (talkId: number) => Promise<void>;
  postTalkPrefer: (talkId: number) => Promise<void>;
  deleteTalkPrefer: (talkId: number) => Promise<void>;
};

const useTalkApi = (): TalkApis => {
  const client = useClient();
  return {
    getAllTalks: async (sortType: string): Promise<TalkProps[]> => {
      // const { data } = await client.get('/talks');
      // return data;
      console.log(sortType);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return MOCK_TALK_DATA;
    },

    getTalk: async (talkId): Promise<any> => {
      // const { data } = await client.get(`/talk/${talkId}`);
      // return data;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(talkId);
      return MOCK_TALK_POST_DATA;
    },

    postTalk: async (body: FormData): Promise<any> => {
      const { data } = await client.post('/talk', body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },
    patchTalk: async (id: number, body: FormData): Promise<any> => {
      const { data } = await client.patch(`/talk/edit/${id}`, body, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    },
    deleteTalk: async (talkId: number): Promise<void> => {
      await client.delete(`/talk/${talkId}`);
    },

    postTalkPrefer: async (talkId: number): Promise<void> => {
      await client.post(`/talk/prefer/${talkId}`);
    },

    deleteTalkPrefer: async (talkId: number): Promise<void> => {
      await client.delete(`/talk/prefer/${talkId}`);
    },
  };
};

export default useTalkApi;
