import { memo } from 'react';
import styled from 'styled-components';
import TalkCard from '@components/talk/TalkCard';
import Slider from 'react-slick';
import { MultipleRowSliderOption } from '@constants/sliderOption';
import { useGetAllTalks } from '@hooks/useGetQueries';

const RecentTalkCards = memo(() => {
  const { data: talks } = useGetAllTalks();
  return (
    <StyledSlider {...MultipleRowSliderOption}>
      {talks.map((talk) => (
        <TalkCard {...talk} key={talk.id}></TalkCard>
      ))}
    </StyledSlider>
  );
});

RecentTalkCards.displayName = 'RecentTalkCards';

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

export default RecentTalkCards;
