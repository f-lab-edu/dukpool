import { media } from '@styles/media';
import { memo } from 'react';
import styled from 'styled-components';
import ArticleCardSkeleton from '@components/common/Skeleton/ArticleCardSkeleton';
import { range } from 'lodash';

const articleSkeletonArray = range(8).map((_, idx) => (
  <ArticleCardSkeleton key={idx} />
));

const ArticleGridSkeleton = memo(() => (
  <SkeletonUl>{articleSkeletonArray}</SkeletonUl>
));

ArticleGridSkeleton.displayName = 'ArticleGridSkeleton';

const SkeletonUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  align-items: center;
  gap: 10px;
  ${media.tablet`
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  `}
  ${media.phone`
  grid-template-columns: repeat(2, minmax(150px, 1fr));
  `}
`;

export default ArticleGridSkeleton;
