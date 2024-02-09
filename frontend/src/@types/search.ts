import { ArticleResponse } from './article';
import { TalkResponse } from './talk';

export type SearchResponse = {
  tags: string[];
  articles: ArticleResponse[];
  talks: TalkResponse[];
};
