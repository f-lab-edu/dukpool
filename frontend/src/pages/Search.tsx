import Layout from '@components/common/Layout';
import SearchBar from '@components/common/SearchBar';
import SearchSkeleton from '@components/common/Skeleton/SearchSkeleton';
import SearchResult from '@components/search/SearchResult';
import { media } from '@styles/media';
import { Suspense } from 'react';
import styled from 'styled-components';

const Search = () => {
  return (
    <Layout>
      <StyledSection>
        <SearchBar />
        <Suspense fallback={<SearchSkeleton />}>
          <SearchResult />
        </Suspense>
      </StyledSection>
    </Layout>
  );
};

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  ${media.phone`
    padding: 0 20px;
  `}
`;

export default Search;
