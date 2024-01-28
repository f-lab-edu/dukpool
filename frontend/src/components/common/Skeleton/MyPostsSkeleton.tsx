import { media } from '@styles/media';
import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import ArticleGridSkeleton from '@components/common/Skeleton/ArticleGridSkeleton';
import TalkGridSkeleton from '@components/common/Skeleton/TalkGridSkeleton';

const MyPostsSkeleton = memo(() => {
  return (
    <SkeletonSection>
      <SkeletonTitle />
      <SkeletonContainer>
        <ArticleGridSkeleton />
        <TalkGridSkeleton />
      </SkeletonContainer>
    </SkeletonSection>
  );
});

MyPostsSkeleton.displayName = 'MyPostsSkeleton';

const skeletonAnimation = keyframes`
    from {
    opacity: 0.1;
    }
    to {
    opacity: 1;
    }
`;

const SkeletonSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  animation: ${skeletonAnimation} 2s infinite;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const SkeletonTitle = styled.h2`
  width: 100px;
  height: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  background-color: var(--skeleton);
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default MyPostsSkeleton;
