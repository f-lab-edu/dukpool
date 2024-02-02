type TalkApis = {
  postTalk: (body: FormData) => Promise<void>;
  patchTalk: (id: number, body: FormData) => Promise<void>;
  deleteTalk: (id: number) => Promise<void>;
  postTalkPrefer: (id: number) => Promise<void>;
  deleteTalkPrefer: (id: number) => Promise<void>;
  postTalkComment: (id: number, comment: string) => Promise<void>;
  patchTalkComment: (id: number, comment: string) => Promise<void>;
  deleteTalkComment: (id: number) => Promise<void>;
};

export default TalkApis;
