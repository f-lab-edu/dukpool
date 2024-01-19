import { memo } from 'react';
import styled from 'styled-components';
import { UseFormRegisterReturn } from 'react-hook-form';

type TitleProps = {
  register: UseFormRegisterReturn;
};

const Title = memo(({ register }: TitleProps) => {
  return (
    <StyledLabelContainer>
      <StyledLabel>
        <StyledFormTitle>제목</StyledFormTitle>
        <StyledInput
          {...register}
          type="text"
          placeholder="제목을 입력해주세요."
        />
      </StyledLabel>
    </StyledLabelContainer>
  );
});

Title.displayName = 'Title';

const StyledLabelContainer = styled.div`
  width: 100%;
  margin-bottom: 8px;
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledFormTitle = styled.p`
  font-size: 14px;
  margin-bottom: 4px;
`;

const StyledInput = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid var(--gray-4);
`;

export default Title;