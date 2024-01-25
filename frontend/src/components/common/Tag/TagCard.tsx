import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type TagCardProps = {
  text: string;
};

const TagCard = memo(({ text }: TagCardProps) => {
  return (
    <StyledList>
      <StyledLink to={`/tagged/${text}`}>#{text}</StyledLink>
    </StyledList>
  );
});

TagCard.displayName = 'TagCard';

const StyledList = styled.li`
  min-width: 100px;
  background-color: lavender;
  padding: 12px 8px;
  border-radius: 8px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  width: 100%;
`;

export default TagCard;
