import { memo } from 'react';
import styled from 'styled-components';

const TagCardSkeleton = memo(() => {
  return (
    <StyledList>
      <StyledContainer />
    </StyledList>
  );
});

TagCardSkeleton.displayName = 'TagCardSkeleton';

const StyledList = styled.div`
  min-width: 100px;
  height: 38px;
  background-color: var(--skeleton);
  padding: 12px 8px;
  border-radius: 8px;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
`;

const StyledContainer = styled.div`
  width: 100%;
`;

export default TagCardSkeleton;
