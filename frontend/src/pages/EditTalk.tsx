import { Suspense, memo } from 'react';
import { media } from '@styles/media';
import Layout from '@components/common/Layout';
import styled from 'styled-components';
import EditSkeleton from '@components/common/Skeleton/EditSkeleton';
import DukpoolEditTalk from '@components/talk/EditTalk/DukpoolEditTalk';

const EditTalk = memo(() => {
  return (
    <Layout>
      <StyledSection>
        <StyledContainer>
          <StyledTitle>덕질 토크 수정하기</StyledTitle>
          <Suspense fallback={<EditSkeleton />}>
            <DukpoolEditTalk />
          </Suspense>
        </StyledContainer>
      </StyledSection>
    </Layout>
  );
});

EditTalk.displayName = 'EditTalk';

const StyledSection = styled.section`
  max-width: 1140px;
  width: 100%;
  padding: 0 50px;
  margin: 30px auto;
  margin-bottom: 0;
  ${media.phone`
    padding: 0 20px;
  `}
`;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export default EditTalk;
