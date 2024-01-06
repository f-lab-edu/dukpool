import { memo } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { MultipleRowSliderOption } from '@constants/sliderOption';
import TalkCardSkeleton from '@components/common/Skeleton/TalkCardSkeleton';

const TalkSliderSkeleton = memo(() => {
  return (
    <StyledSlider {...MultipleRowSliderOption}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <TalkCardSkeleton key={idx} />
      ))}
    </StyledSlider>
  );
});

TalkSliderSkeleton.displayName = 'TalkSliderSkeleton';

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;

export default TalkSliderSkeleton;
