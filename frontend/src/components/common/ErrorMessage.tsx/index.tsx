import { memo } from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
  field: string;
  type: string;
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
