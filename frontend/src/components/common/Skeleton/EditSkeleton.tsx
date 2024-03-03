import { memo } from 'react';
import styled from 'styled-components';

const EditSkeleton = memo(() => (
  <>
    <SkeletonContainer>
      <SkeletonLabelContainer>
        <SkeletonLabel />
        <SkeletonInput />
      </SkeletonLabelContainer>
    </SkeletonContainer>
    <SkeletonContainer>
      <SkeletonLabelContainer>
        <SkeletonLabel />
        <SkeletonInput />
        <SkeletonTags />
      </SkeletonLabelContainer>
    </SkeletonContainer>
    <SkeletonContainer>
      <SkeletonLabelContainer>
        <SkeletonLabel />
        <StyledTextArea />
      </SkeletonLabelContainer>
    </SkeletonContainer>
  </>
));

EditSkeleton.displayName = 'EditSkeleton';

const SkeletonContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const SkeletonLabelContainer = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SkeletonLabel = styled.div`
  width: 30px;
  height: 14px;
  margin-bottom: 4px;
  background-color: var(--skeleton);
  border-radius: 8px;
`;

const SkeletonInput = styled.div`
  height: 42px;
  border-radius: 8px;
  background-color: var(--skeleton);
`;

const SkeletonTags = styled.div`
  height: 24px;
  border-radius: 8px;
  margin-top: 4px;
  background-color: var(--skeleton);
`;

const StyledTextArea = styled.div`
  height: 40vh;
  border-radius: 8px;
  background-color: var(--skeleton);
`;

export default EditSkeleton;
