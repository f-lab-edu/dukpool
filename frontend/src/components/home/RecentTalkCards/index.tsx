import { useGetAllTalks } from '@hooks/useGetQueries';
import { memo } from 'react';
import styled from 'styled-components';
import { TalkProps } from '@utils/mockData';
import TalkCard from '@components/TalkCard';
import Slider from 'react-slick';
import { MultipleRowSliderOption } from '@constants/sliderOption';

const RecentTalkCards = memo(() => {
  const { data: talks } = useGetAllTalks();

  return (
    <StyledSlider {...MultipleRowSliderOption}>
      {talks?.map(
        ({
          title,
          userProfile,
          image,
          content,
          date,
          id,
          likeCount,
          commentCount,
        }: TalkProps) => (
          <TalkCard
            title={title}
            userProfile={userProfile}
            image={image}
            content={content}
            date={date}
            id={id}
            likeCount={likeCount}
            commentCount={commentCount}
            key={id}
          ></TalkCard>
        ),
      )}
    </StyledSlider>
  );
});

RecentTalkCards.displayName = 'RecentTalkCards';

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
