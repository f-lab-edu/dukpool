import { Suspense, memo } from 'react';
import styled from 'styled-components';
import RecentTalkCards from '../RecentTalkCards';
import { media } from '@styles/media';
import TalkSkeleton from '@components/common/Skeleton/TalkSkeleton';

const DukpoolTalks = memo(() => {
  return (
    <StyledSection>
      <StyledSectionTitle>유저들의 최근 토크</StyledSectionTitle>
      <Suspense fallback={<TalkSkeleton />}>
        <RecentTalkCards />
      </Suspense>
    </StyledSection>
  );
});

DukpoolTalks.displayName = 'DukpoolTalks';

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 30px auto;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

export default DukpoolTalks;
