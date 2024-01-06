import { useGetAllTalks } from '@hooks/useGetQueries';
import { memo } from 'react';
import styled from 'styled-components';
import { TalkProps } from '@utils/mockData';
import TalkCard from '@components/TalkCard';

const MobileRecentTalkCards = memo(() => {
  const { data: talks } = useGetAllTalks();

  return (
    <StyledWrapper>
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
    </StyledWrapper>
  );
});

MobileRecentTalkCards.displayName = 'RecentTalkCards';

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

export default MobileRecentTalkCards;
