import TalkCard from '@components/talk/TalkCard';
import { memo } from 'react';
import { ContentResponse } from 'src/@types/content';
import styled from 'styled-components';

type SearchTalkProps = {
  talks: Omit<ContentResponse, 'comment'>[];
  isTagged?: boolean;
};

const SearchTalk = memo(({ talks, isTagged = false }: SearchTalkProps) => {
  return (
    <StyledContainer>
      <StyledSectionTitle>덕질 토크</StyledSectionTitle>
      {talks.length ? (
        <StyledUl>
          {talks.map((talk) => (
            <TalkCard key={talk.id} {...talk}></TalkCard>
          ))}
        </StyledUl>
      ) : (
        <StyledNoneResultBox>
          {isTagged
            ? '해당 태그가 포함된 덕질 토크가 없어요🥲'
            : '검색어에 해당하는 덕질 토크가 없어요🥲'}
        </StyledNoneResultBox>
      )}
    </StyledContainer>
  );
});

SearchTalk.displayName = 'SearchTalk';

const StyledContainer = styled.div`
  margin: 30px 0;
`;

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

const StyledUl = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
`;

const StyledNoneResultBox = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: var(--gray-1);
`;

export default SearchTalk;
