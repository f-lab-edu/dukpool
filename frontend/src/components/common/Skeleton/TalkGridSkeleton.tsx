import { memo } from 'react';
import styled from 'styled-components';
import { range } from 'lodash';
import TalkCardSkeleton from '@components/common/Skeleton/TalkCardSkeleton';

const TalkSkeletonArray = range(6).map((_, idx) => (
  <TalkCardSkeleton key={idx} />
));

const TalkGridSkeleton = memo(() => (
  <SkeletonUl>{TalkSkeletonArray}</SkeletonUl>
));

TalkGridSkeleton.displayName = 'TalkGridSkeleton';

const SkeletonUl = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: center;
`;

export default TalkGridSkeleton;
