import useClient from '@hooks/useClient';

type TalkApis = {
  postTalk: (body: FormData) => Promise<any>;
  patchTalk: (id: number, body: FormData) => Promise<any>;
  deleteTalk: (talkId: number) => Promise<void>;
};

const talkApi = (): TalkApis => {
  const client = useClient();
  return {
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
  };
};

export default talkApi;
