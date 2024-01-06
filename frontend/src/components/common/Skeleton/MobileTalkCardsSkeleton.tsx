import { memo } from 'react';
import styled from 'styled-components';
import TalkCardSkeleton from '@components/common/Skeleton/TalkCardSkeleton';

const MobileTalkCardsSkeleton = memo(() => {
  return (
    <StyledWrapper>
      {Array.from({ length: 6 }).map((_, idx) => (
        <TalkCardSkeleton key={idx} />
      ))}
    </StyledWrapper>
  );
});

MobileTalkCardsSkeleton.displayName = 'MobileTalkCardsSkeleton';

const StyledWrapper = styled.div`
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

export default MobileTalkCardsSkeleton;
