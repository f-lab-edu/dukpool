import { media } from '@styles/media';
import { memo } from 'react';
import styled from 'styled-components';
import ArticleCardSkeleton from '@components/common/Skeleton/ArticleCardSkeleton';
import TalkCardSkeleton from '@components/common/Skeleton/TalkCardSkeleton';
import TagCardSkeleton from './TagCardSkeleton';

const ArticleSkeletonArray = Array.from({ length: 8 }).map((_, idx) => (
  <ArticleCardSkeleton key={idx} />
));

const TalkSkeletonArray = Array.from({ length: 6 }).map((_, idx) => (
  <TalkCardSkeleton key={idx} />
));

const TagSkeletonArray = Array.from({ length: 6 }).map((_, idx) => (
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
        <StyledArticleUl>{ArticleSkeletonArray}</StyledArticleUl>
      </StyledContainer>
      <StyledContainer>
        <StyledSectionTitle>덕질 토크</StyledSectionTitle>
        <StyledTalkUl>{TalkSkeletonArray}</StyledTalkUl>
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

const StyledArticleUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  align-items: center;
  gap: 10px;
  ${media.tablet`
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  `}
  ${media.phone`
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  `}
`;

const StyledTalkUl = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
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
