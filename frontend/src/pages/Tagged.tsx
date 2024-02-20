import Layout from '@components/common/Layout';
import TaggedSkeleton from '@components/common/Skeleton/TaggedSkeleton';
import TaggedResult from '@components/tagged/TaggedResult';
import { media } from '@styles/media';
import { Suspense } from 'react';
import styled from 'styled-components';

const Tagged = () => {
  return (
    <Layout>
      <StyledSection>
        <Suspense fallback={<TaggedSkeleton />}>
          <TaggedResult />
        </Suspense>
      </StyledSection>
    </Layout>
  );
};

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 40px auto;
  ${media.phone`
    padding: 0 20px;
  `}
`;

export default Tagged;
