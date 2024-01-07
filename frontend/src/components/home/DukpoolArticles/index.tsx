import { Suspense, memo } from 'react';
import styled from 'styled-components';
import RecentArticleCards from '@components/home/RecentArticleCards';
import { media } from '@styles/media';
import ArticleSkeleton from '@components/common/Skeleton/ArticleSkeleton';

const DukpoolArticles = memo(() => {
  return (
    <StyledSection>
      <StyledSectionTitle>유저들의 최근 덕질</StyledSectionTitle>
      <Suspense fallback={<ArticleSkeleton />}>
        <RecentArticleCards />
      </Suspense>
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
