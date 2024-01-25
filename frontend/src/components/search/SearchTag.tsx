import { memo } from 'react';
import styled from 'styled-components';
import TagCard from '@components/common/Tag/TagCard';
import { media } from '@styles/media';

const SearchTag = memo(({ tags }: { tags: string[] }) => {
  return (
    <StyledContainer>
      <StyledSectionTitle>태그</StyledSectionTitle>
      {tags.length ? (
        <StyledUl>
          {tags.map((tag) => (
            <TagCard key={tag} text={tag} />
          ))}
        </StyledUl>
      ) : (
        <StyledNoneResultBox>
          검색어에 해당하는 태그가 없어요🥲
        </StyledNoneResultBox>
      )}
    </StyledContainer>
  );
});

SearchTag.displayName = 'SearchTag';

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
  grid-template-columns: repeat(6, minmax(100px, 1fr));
  align-items: center;
  gap: 10px;
  ${media.tablet`
  grid-template-columns: repeat(4, minmax(100px, 1fr));
`}
  ${media.phone`
  grid-template-columns: repeat(3, minmax(100px, 1fr));
`}
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

export default SearchTag;
