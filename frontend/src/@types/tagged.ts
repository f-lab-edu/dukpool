import { ArticleResponse } from './article';
import { TalkResponse } from './talk';

export type TaggedPostResponse = {
  articles: ArticleResponse[];
  talks: TalkResponse[];
};
