import { memo } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { MultipleRowSliderOption } from '@constants/sliderOption';
import TalkCardSkeleton from '@components/common/Skeleton/TalkCardSkeleton';
import useMediaQuery from '@hooks/useMediaQuery';

const SkeletonArray = Array.from({ length: 6 }).map((_, idx) => (
  <TalkCardSkeleton key={idx} />
));

const TalkSkeleton = memo(() => {
  const { isMobile } = useMediaQuery();

  return isMobile ? (
    <StyledWrapper>{SkeletonArray}</StyledWrapper>
  ) : (
    <StyledSlider {...MultipleRowSliderOption}>{SkeletonArray}</StyledSlider>
  );
});

TalkSkeleton.displayName = 'TalkSkeleton';

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
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

export default TalkSkeleton;
