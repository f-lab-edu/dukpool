import { memo } from 'react';
import styled from 'styled-components';
import TagCard from '@components/common/Tag/TagCard';
import { media } from '@styles/media';

const SearchTag = memo(({ tag }: { tag: string }) => {
  return (
    <StyledContainer>
      <StyledSectionTitle>태그</StyledSectionTitle>
      <StyledUl>
        <TagCard key={tag} text={tag} />
      </StyledUl>
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

export default SearchTag;
