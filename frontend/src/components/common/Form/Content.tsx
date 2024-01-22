import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import useInnerHeight from '@hooks/useInnerHeight';
import styled from 'styled-components';

const Content = memo(() => {
  const { height } = useInnerHeight();
  const { register } = useFormContext();
  return (
    <StyledLabelContainer>
      <StyledLabel>
        <StyledFormTitle>내용</StyledFormTitle>
        <StyledTextArea
          {...register('content', { minLength: 10, required: true })}
          $height={height}
          placeholder="최소 10자의 내용을 입력해주세요."
          required
        />
      </StyledLabel>
    </StyledLabelContainer>
  );
});

Content.displayName = 'Content';

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledLabelContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: 8px;
`;

const StyledFormTitle = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const StyledTextArea = styled.textarea<{ $height: number }>`
  height: ${({ $height }) => `${$height - 50}vh`};
  padding: 8px;
  border-radius: 8px;
  border: 1px solid var(--gray-4);
`;

export default Content;
