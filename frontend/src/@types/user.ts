import { ContentResponse } from './content';

export type UserProps = {
  id: string;
  profileImg: string;
  nickname: string;
};

export type UserDataResponse = {
  id: string;
  profileImg: string;
  nickname: string;
  content: Omit<Omit<ContentResponse, 'comment'>, 'writer'>;
  talkContent: Omit<Omit<ContentResponse, 'comment'>, 'writer'>;
};
