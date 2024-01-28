import { media } from '@styles/media';
import { memo } from 'react';
import styled from 'styled-components';
import TagCardSkeleton from './TagCardSkeleton';
import { range } from 'lodash';
import ArticleGridSkeleton from './ArticleGridSkeleton';
import TalkGridSkeleton from './TalkGridSkeleton';

const TagSkeletonArray = range(6).map((_, idx) => (
  <TagCardSkeleton key={idx} />
));

const SearchSkeleton = memo(() => {
  return (
    <div>
      <StyledSearchResultText />
      <StyledContainer>
        <StyledSectionTitle>태그</StyledSectionTitle>
        <StyledTagUl>{TagSkeletonArray}</StyledTagUl>
      </StyledContainer>
      <StyledContainer>
        <StyledSectionTitle>덕질 자랑</StyledSectionTitle>
        <ArticleGridSkeleton />
      </StyledContainer>
      <StyledContainer>
        <StyledSectionTitle>덕질 토크</StyledSectionTitle>
        <TalkGridSkeleton />
      </StyledContainer>
    </div>
  );
});

SearchSkeleton.displayName = 'SearchSkeleton';

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledContainer = styled.div`
  margin: 30px 0;
`;

const StyledSearchResultText = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 14px;
  color: var(--skeleton);
`;

const StyledTagUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  align-items: center;
  gap: 10px;
  ${media.tablet`
  grid-template-columns: repeat(4, minmax(100px, 1fr));
`}
  ${media.phone`
  grid-template-columns: repeat(3, minmax(100px, 1fr));
`}
`;

export default SearchSkeleton;
