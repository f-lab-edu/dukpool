import { memo } from 'react';
import { Suspense } from 'react';
import MobileRecentArticleCards from '@components/home/RecentArticleCards/mobile';
import ArticleSliderSkeleton from '@components/common/Skeleton/ArticleSliderSkeleton';
import styled from 'styled-components';
import useMediaQuery from '@hooks/useMediaQuery';
import MobileArticleCardsSkeleton from '@components/common/Skeleton/MobileArticleCardsSkeleton';
import RecentArticleCards from '@components/home/RecentArticleCards';
import { media } from '@styles/media';

const DukpoolArticles = memo(() => {
  const { isMobile } = useMediaQuery();
  return (
    <StyledSection>
      <StyledSectionTitle>유저들의 최근 덕질</StyledSectionTitle>
      {isMobile ? (
        <Suspense fallback={<MobileArticleCardsSkeleton />}>
          <MobileRecentArticleCards />
        </Suspense>
      ) : (
        <Suspense fallback={<ArticleSliderSkeleton />}>
          <RecentArticleCards />
        </Suspense>
      )}
    </StyledSection>
  );
});

DukpoolArticles.displayName = 'DukpoolArticles';

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const StyledSectionTitle = styled.h2`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
`;

export default DukpoolArticles;
