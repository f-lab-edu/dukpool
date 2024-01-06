import { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const CardSkeleton = memo(() => {
  return (
    <SkeletonContainer>
      <SkeletonImgContainer>
        <SkeletonImage />
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
  );
});

CardSkeleton.displayName = 'CardSkeleton';

const skeletonAnimation = keyframes`
    from {
    opacity: 0.1;
    }
    to {
    opacity: 1;
    }
`;

const SkeletonContainer = styled.div``;

const SkeletonImgContainer = styled.div`
  width: 200px;
  height: 200px;
  animation: ${skeletonAnimation} 2s infinite;
`;

const SkeletonImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  background-color: var(--skeleton);
`;

const SkeletonInfoContainer = styled.div`
  width: 200px;
  padding: 12px 0;
  animation: ${skeletonAnimation} 2s infinite;
`;

const SkeletonTitle = styled.div`
  width: 100%;
  height: 18px;
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
  height: 14px;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const SkeletonDate = styled.div`
  width: 200px;
  height: 11px;
  background-color: var(--skeleton);
  border-radius: 8px;
  margin-bottom: 4px;
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

export default CardSkeleton;
