import { memo } from 'react';
import ArticleCardSkeleton from '@components/common/Skeleton/ArticleCardSkeleton';
import styled from 'styled-components';
import Slider from 'react-slick';
import { SliderOption } from '@constants/sliderOption';

const ArticleSliderSkeleton = memo(() => {
  return (
    <StyledSlider {...SliderOption}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <ArticleCardSkeleton key={idx} />
      ))}
    </StyledSlider>
  );
});

ArticleSliderSkeleton.displayName = 'ArticleSliderSkeleton';

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    justify-content: center;
  }
`;

export default ArticleSliderSkeleton;
