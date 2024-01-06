import { memo } from 'react';
import { Suspense } from 'react';
import styled from 'styled-components';
import useMediaQuery from '@hooks/useMediaQuery';
import MobileRecentTalkCards from '../RecentTalkCards/mobile';
import RecentTalkCards from '../RecentTalkCards';
import TalkSliderSkeleton from '@components/common/Skeleton/TalkSliderSkeleton';
import MobileTalkCardsSkeleton from '@components/common/Skeleton/MobileTalkCardsSkeleton';
import { media } from '@styles/media';

const DukpoolTalks = memo(() => {
  const { isMobile } = useMediaQuery();
  return (
    <StyledSection>
      <StyledSectionTitle>유저들의 최근 토크</StyledSectionTitle>
      {isMobile ? (
        <Suspense fallback={<MobileTalkCardsSkeleton />}>
          <MobileRecentTalkCards />
        </Suspense>
      ) : (
        <Suspense fallback={<TalkSliderSkeleton />}>
          <RecentTalkCards />
        </Suspense>
      )}
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
