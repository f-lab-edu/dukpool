import { memo } from 'react';
import { LiteralUnion } from 'react-hook-form';
import styled from 'styled-components';

type ErrorMessageProps = {
  type: LiteralUnion<'required' | 'maxLength' | 'minLength', string>;
  field: string;
  length: number;
};

const ErrorMessage = memo(({ type, field, length }: ErrorMessageProps) => {
  if (type === 'minLength') {
    return (
      <StyledContainer>
        {field}을 최소 {length}자 이상 입력해주세요.
      </StyledContainer>
    );
  }
  if (type === 'maxLength') {
    return (
      <StyledContainer>
        {field}은 최대 {length}자 이상 입력할 수 있습니다.
      </StyledContainer>
    );
  }
  if (type === 'required') {
    return <StyledContainer>{field}을 입력해주세요.</StyledContainer>;
  }
});

ErrorMessage.displayName = 'ErrorMessage';

const StyledContainer = styled.div`
  font-size: 12px;
  color: var(--error);
`;

export default ErrorMessage;
