import { ContentResponse } from './content';

export type TaggedPostResponse = {
  articles: ContentResponse[];
  talks: ContentResponse[];
};
