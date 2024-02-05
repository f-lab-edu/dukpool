import { ArticleResponse } from './article';
import { TalkResponse } from './talk';

export type ProfileResponse = {
  userName: string;
  image: any;
};

export type UserPostsResponse = {
  articles: ArticleResponse[];
  talks: TalkResponse[];
};
