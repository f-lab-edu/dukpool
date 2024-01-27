import { memo } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { MultipleRowSliderOption } from '@constants/sliderOption';
import TalkCardSkeleton from '@components/common/Skeleton/TalkCardSkeleton';
import { range } from 'lodash';

const SkeletonArray = range(4).map((_, idx) => <TalkCardSkeleton key={idx} />);

const TalkSkeleton = memo(() => {
  return (
    <StyledSlider {...MultipleRowSliderOption}>{SkeletonArray}</StyledSlider>
  );
});

TalkSkeleton.displayName = 'TalkSkeleton';

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    overflow: hidden;
  }
`;

export default TalkSkeleton;
