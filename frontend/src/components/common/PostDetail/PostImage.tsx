import { memo } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { ArticleImageSliderOption } from '@constants/sliderOption';
import placeholderImage from '@assets/images/placeholder-image.png';
import { media } from '@styles/media';

const PostImage = memo(({ images }: { images: string[] }) => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledSlider {...ArticleImageSliderOption}>
          {images.length ? (
            images.map((image) => (
              <StyledImgContainer key={image}>
                <StyledImg src={image} />
              </StyledImgContainer>
            ))
          ) : (
            <StyledImgContainer>
              <StyledImg src={placeholderImage} />
            </StyledImgContainer>
          )}
        </StyledSlider>
      </StyledContainer>
    </StyledWrapper>
  );
});

PostImage.displayName = 'PostImage';

const StyledWrapper = styled.section`
  margin: 30px 100px 0 100px;
  ${media.tablet`
    margin: 20px 30px 0 30px;
  `}
  ${media.phone`
    margin: 0px 0px;
  `}
`;

const StyledContainer = styled.div`
  position: relative;
  max-width: 730px;
  width: 100%;
  margin: 0 auto;
`;

const StyledImgContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 70%;
  margin: 0 auto;
  border-radius: 8px;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    position: absolute;
    bottom: 3px;
    width: 100%;
    padding-bottom: 16px;
  }
`;

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  ${media.phone`
  border-radius: 0px;
  `}
`;

export default PostImage;
