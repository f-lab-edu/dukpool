import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import placeholderImage from '@assets/images/placeholder-image.png';

const TalkCardSkeleton = memo(() => {
  return (
    <StyledList>
      <SkeletonWrapper>
        <SkeletonContainer>
          <SkeletonImgContainer>
            <SkeletonImage src={placeholderImage} />
          </SkeletonImgContainer>
          <SkeletonContentContainer>
            <SkeletonTitle />
            <SkeletonContent />
          </SkeletonContentContainer>
        </SkeletonContainer>
        <SkeletonInfoContainer>
          <SkeletonProfileContainer>
            <SkeletonProfileDiv>
              <SkeletonProfileImageContainer>
                <SkeletonProfileImage />
              </SkeletonProfileImageContainer>
              <SkeletonProfile />
            </SkeletonProfileDiv>
            <SkeletonCountBox>
              <SkeletonCount />
              <SkeletonCount />
            </SkeletonCountBox>
          </SkeletonProfileContainer>
          <SkeletonDate />
        </SkeletonInfoContainer>
      </SkeletonWrapper>
    </StyledList>
  );
});

TalkCardSkeleton.displayName = 'TalkCardSkeleton';

const skeletonAnimation = keyframes`
    from {
    opacity: 0.1;
    }
    to {
    opacity: 1;
    }
`;

const StyledList = styled.div`
  padding: 0 12px;
`;

const SkeletonWrapper = styled.div`
  min-width: 250px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  animation: ${skeletonAnimation} 2s infinite;
`;

const SkeletonContainer = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
`;

const SkeletonImgContainer = styled.div`
  width: 30%;
  min-width: 80px;
  overflow: hidden;
  border-radius: 8px;
`;

const SkeletonImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: var(--skeleton);
`;

const SkeletonContentContainer = styled.div`
  width: 65%;
`;

const SkeletonContent = styled.div`
  width: 100%;
  height: 13px;
  line-height: 1.36;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const SkeletonTitle = styled.div`
  height: 18px;
  margin-bottom: 8px;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const SkeletonInfoContainer = styled.div`
  width: 100%;
  padding: 12px 0;
`;

const SkeletonProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  justify-content: space-between;
`;

const SkeletonProfileDiv = styled.div`
  display: flex;
  align-items: center;
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
  width: 80px;
  height: 14px;
  margin-left: 2px;
  border-radius: 8px;
  background-color: var(--skeleton);
`;

const SkeletonDate = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 11px;
  margin-bottom: 4px;
  background-color: var(--skeleton);
  border-radius: 8px;
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

export default TalkCardSkeleton;
