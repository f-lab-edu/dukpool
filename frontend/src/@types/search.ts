import { ContentResponse } from './content';

export type SearchResponse = {
  tags: string[];
  contents: ContentResponse[];
  talkContents: ContentResponse[];
};
