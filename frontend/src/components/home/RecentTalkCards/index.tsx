import { memo } from 'react';
import styled from 'styled-components';
import { TalkProps } from '@utils/mockData';
import TalkCard from '@components/TalkCard';
import Slider from 'react-slick';
import { MultipleRowSliderOption } from '@constants/sliderOption';
import useMediaQuery from '@hooks/useMediaQuery';
import { useGetAllTalks } from '@hooks/useGetQueries';

const RecentTalkCards = memo(() => {
  const { isMobile } = useMediaQuery();
  const { data: talks } = useGetAllTalks();
  return isMobile ? (
    <StyledWrapper>
      {talks?.map((talk: TalkProps) => <TalkCard {...talk}></TalkCard>)}
    </StyledWrapper>
  ) : (
    <StyledSlider {...MultipleRowSliderOption}>
      {talks?.map((talk: TalkProps) => <TalkCard {...talk}></TalkCard>)}
    </StyledSlider>
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
