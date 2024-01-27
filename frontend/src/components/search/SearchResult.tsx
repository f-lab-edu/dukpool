import { memo } from 'react';
import { useSearchData } from '@hooks/useGetQueries';
import SearchTag from '@components/search/SearchTag';
import SearchArticle from '@components/search/SearchArticle';
import SearchTalk from '@components/search/SearchTalk';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const SearchResult = memo(() => {
  const { searchId } = useParams();
  const { data: searchData } = useSearchData(searchId);
  return (
    <>
      <StyledResultText>"{searchId}"에 대한 검색 결과에요!</StyledResultText>
      <SearchTag tags={searchData.tags} />
      <SearchArticle articles={searchData.articles} />
      <SearchTalk talks={searchData.talks} />
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
