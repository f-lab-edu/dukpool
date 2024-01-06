import { memo } from 'react';
import ArticleCardSkeleton from '@components/common/Skeleton/ArticleCardSkeleton';
import styled from 'styled-components';

const MobileArticleCardsSkeleton = memo(() => {
  return (
    <StyledWrapper>
      {Array.from({ length: 5 }).map((_, idx) => (
        <ArticleCardSkeleton key={idx} />
      ))}
    </StyledWrapper>
  );
});

MobileArticleCardsSkeleton.displayName = 'MobileArticleCardsSkeleton';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default MobileArticleCardsSkeleton;
