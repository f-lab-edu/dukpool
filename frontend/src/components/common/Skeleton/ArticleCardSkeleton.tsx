import { media } from '@styles/media';
import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';

const ArticleCardSkeleton = memo(() => {
  return (
    <SkeletonList>
      <SkeletonContainer>
        <SkeletonImgContainer>
          <SkeletonImage alt="placeholderImage" src={placeholderImage} />
        </SkeletonImgContainer>
        <SkeletonInfoContainer>
          <SkeletonTitle />
          <SkeletonProfileContainer>
            <SkeletonProfileImageContainer>
              <SkeletonProfileImage />
            </SkeletonProfileImageContainer>
            <SkeletonProfile />
          </SkeletonProfileContainer>
          <SkeletonDate />
          <SkeletonCountBox>
            <SkeletonCount />
            <SkeletonCount />
          </SkeletonCountBox>
        </SkeletonInfoContainer>
      </SkeletonContainer>
    </SkeletonList>
  );
});

ArticleCardSkeleton.displayName = 'ArticleCardSkeleton';

const skeletonAnimation = keyframes`
    from {
    opacity: 0.1;
    }
    to {
    opacity: 1;
    }
`;

const SkeletonList = styled.div`
  padding: 0 8px;
  max-width: 250px;
  min-width: 150px;
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

const SkeletonImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  aspect-ratio: 1;
  animation: ${skeletonAnimation} 2s infinite;
`;

const SkeletonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: var(--skeleton);
`;

const SkeletonInfoContainer = styled.div`
  width: 100%;
  padding: 12px 0;
  animation: ${skeletonAnimation} 2s infinite;
`;

const SkeletonTitle = styled.div`
  width: 100%;
  height: 14px;
  background-color: var(--skeleton);
  border-radius: 8px;
  margin-bottom: 8px;
`;

const SkeletonProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2px;
  margin-bottom: 4px;
`;

const SkeletonProfileImageContainer = styled.div`
  width: 25px;
  height: 25px;
  overflow: hidden;
  border-radius: 50%;
`;

const SkeletonProfileImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--skeleton);
`;

const SkeletonProfile = styled.div`
  width: 85%;
  height: 12px;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const SkeletonDate = styled.div`
  width: 100%;
  height: 11px;
  background-color: var(--skeleton);
  border-radius: 8px;
  margin-bottom: 4px;
  ${media.phone`
    width: 150px;
  `}
`;

const SkeletonCountBox = styled.div`
  display: flex;
  gap: 8px;
`;

const SkeletonCount = styled.div`
  width: 30px;
  height: 16px;
  border-radius: 8px;
  background-color: var(--skeleton);
`;

export default ArticleCardSkeleton;
