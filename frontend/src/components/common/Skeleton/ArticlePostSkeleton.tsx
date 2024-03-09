import { ArticleImageSliderOption } from '@constants/sliderOption';
import { media } from '@styles/media';
import { memo } from 'react';
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import placeholderImage from '@assets/images/placeholder-image.png';

const ArticlePostSkeleton = memo(() => {
  return (
    <>
      <SkeletonWrapper>
        <SkeletonContainer>
          <SkeletonSlider {...ArticleImageSliderOption}>
            <SkeletonImgContainer>
              <StyledImg alt="placeholderImage" src={placeholderImage} />
            </SkeletonImgContainer>
          </SkeletonSlider>
        </SkeletonContainer>
      </SkeletonWrapper>
      <SkeletonInfoWrapper>
        <SkeletonInfoContainer>
          <SkeletonUserProfile>
            <SkeletonProfileImgContainer>
              <SkeletonProfileImg
                alt="placeholderImage"
                src={placeholderImage}
              />
            </SkeletonProfileImgContainer>
            <SkeletonProfileName />
          </SkeletonUserProfile>
          <SkeletonDesciption>
            <SkeletonTitle />
            <SkeletonDate />
            <SkeletonContent />
          </SkeletonDesciption>
        </SkeletonInfoContainer>
      </SkeletonInfoWrapper>
    </>
  );
});

ArticlePostSkeleton.displayName = 'ArticlePostSkeleton';

const skeletonAnimation = keyframes`
    from {
    opacity: 0.1;
    }
    to {
    opacity: 1;
    }
`;

const SkeletonWrapper = styled.div`
  animation: ${skeletonAnimation} 2s infinite;
  margin: 30px 100px 0 100px;
  ${media.tablet`
    margin: 20px 30px 0 30px;
  `}
  ${media.phone`
    margin: 0px 0px;
  `}
`;

const SkeletonContainer = styled.div`
  position: relative;
  max-width: 730px;
  width: 100%;
  margin: 0 auto;
`;

const SkeletonSlider = styled(Slider)`
  .slick-dots {
    position: absolute;
    bottom: 3px;
    width: 100%;
    padding-bottom: 16px;
  }
`;

const SkeletonImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 70%;
  margin: 0 auto;
`;

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const SkeletonInfoWrapper = styled.div`
  animation: ${skeletonAnimation} 2s infinite;
  margin: 30px 100px;
  ${media.tablet`
  margin: 20px 30px;
`}
  ${media.phone`
  margin: 0px 15px;
`}
`;

const SkeletonInfoContainer = styled.div`
  max-width: 730px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
`;

const SkeletonUserProfile = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-4);
`;

const SkeletonProfileImgContainer = styled.div`
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 4px;
`;

const SkeletonProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SkeletonProfileName = styled.div`
  width: 100px;
  height: 14px;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const SkeletonDesciption = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid var(--gray-4);
`;

const SkeletonTitle = styled.h2`
  width: 50%;
  height: 20px;
  margin-bottom: 8px;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const SkeletonDate = styled.div`
  width: 10%;
  height: 11px;
  margin-bottom: 22px;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const SkeletonContent = styled.div`
  width: 100%;
  height: 80px;
  margin: 10px 0;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

export default ArticlePostSkeleton;
