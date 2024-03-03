import { memo } from 'react';
import styled from 'styled-components';
import ArticleGridSkeleton from './ArticleGridSkeleton';
import TalkGridSkeleton from './TalkGridSkeleton';

const TaggedSkeleton = memo(() => {
  return (
    <div>
      <SkeletonResultContainer>
        <SkeletonResultText />
      </SkeletonResultContainer>
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

TaggedSkeleton.displayName = 'TaggedSkeleton';

const SkeletonResultContainer = styled.div`
  display: flex;
  gap: 4px;
  padding: 20px 0;
  font-size: 14px;
  color: var(--gray-1);
  justify-content: center;
`;

const SkeletonResultText = styled.div`
  width: 30%;
  height: 20px;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledContainer = styled.div`
  margin: 30px 0;
`;

export default TaggedSkeleton;
