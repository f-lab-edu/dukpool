import { memo } from 'react';
import ArticleCardSkeleton from '@components/common/Skeleton/ArticleCardSkeleton';
import styled from 'styled-components';
import Slider from 'react-slick';
import { SliderOption } from '@constants/sliderOption';
import useMediaQuery from '@hooks/useMediaQuery';

const ArticleSkeleton = memo(() => {
  const { isMobile } = useMediaQuery();
  return isMobile ? (
    <StyledWrapper>
      {Array.from({ length: 5 }).map((_, idx) => (
        <ArticleCardSkeleton key={idx} />
      ))}
    </StyledWrapper>
  ) : (
    <StyledSlider {...SliderOption}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <ArticleCardSkeleton key={idx} />
      ))}
    </StyledSlider>
  );
});

ArticleSkeleton.displayName = 'ArticleSkeleton';

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

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

export default ArticleSkeleton;
