import { memo } from 'react';
import styled from 'styled-components';
import { TalkProps } from '@utils/mockData';
import TalkCard from '@components/TalkCard';
import Slider from 'react-slick';
import { MultipleRowSliderOption } from '@constants/sliderOption';
import useMediaQuery from '@hooks/useMediaQuery';
import { useGetAllTalks } from '@hooks/useGetQueries';
import assert from '@utils/assert';

const RecentTalkCards = memo(() => {
  const { isMobile } = useMediaQuery();
  const { data: talks } = useGetAllTalks();
  assert(talks);

  const TalkCards = talks.map((talk: TalkProps) => (
    <TalkCard {...talk}></TalkCard>
  ));

  return isMobile ? (
    <StyledWrapper>{TalkCards}</StyledWrapper>
  ) : (
    <StyledSlider {...MultipleRowSliderOption}>{TalkCards}</StyledSlider>
  );
});

RecentTalkCards.displayName = 'RecentTalkCards';

const StyledWrapper = styled.ul`
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

const StyledSlider = styled(Slider)`
  .slick-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;

export default RecentTalkCards;
