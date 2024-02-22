import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSearch } from '@hooks/useGetQueries';
import assert from 'assert';
import styled from 'styled-components';
import SearchTag from '@components/search/SearchTag';
import SearchArticle from '@components/search/SearchArticle';
import SearchTalk from '@components/search/SearchTalk';

const SearchResult = memo(() => {
  const { searchId } = useParams();
  assert(searchId);
  const { data: searchData } = useSearch(searchId);
  console.log(searchData);
  return (
    <>
      <StyledResultText>"{searchId}"에 대한 검색 결과에요!</StyledResultText>
      <SearchTag tag={searchId} />
      <SearchArticle articles={searchData.contents.data} />
      <SearchTalk talks={searchData.talkContents.data} />
    </>
  );
});

const StyledResultText = styled.h2`
  margin-top: 20px;
  font-size: 14px;
  color: var(--gray-1);
  text-align: center;
`;

SearchResult.displayName = 'SearchResult';

export default SearchResult;
