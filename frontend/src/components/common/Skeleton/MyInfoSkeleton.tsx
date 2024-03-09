import { media } from '@styles/media';
import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';
import ArticleGridSkeleton from '@components/common/Skeleton/ArticleGridSkeleton';
import TalkGridSkeleton from '@components/common/Skeleton/TalkGridSkeleton';

const MyInfoSkeleton = memo(() => {
  return (
    <>
      <SkeletonSection>
        <SkeletonTitle />
        <SkeletonContainer>
          <StyledImg alt="placeholderImage" src={placeholderImage} />
          <SkeletonInfoContainer />
        </SkeletonContainer>
      </SkeletonSection>
      <SkeletonSection>
        <SkeletonTitle />
        <SkeletonPostContainer>
          <ArticleGridSkeleton />
          <TalkGridSkeleton />
        </SkeletonPostContainer>
      </SkeletonSection>
    </>
  );
});

MyInfoSkeleton.displayName = 'MyInfoSkeleton';

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
  justify-content: center;
  gap: 15px;
`;

const SkeletonPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  aspect-ratio: 1;
`;

const SkeletonInfoContainer = styled.div`
  width: 200px;
  height: 100px;
  border-radius: 8px;
  background-color: var(--skeleton);
`;

export default MyInfoSkeleton;
