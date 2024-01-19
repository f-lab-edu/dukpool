import { memo } from 'react';
import styled from 'styled-components';

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = memo(({ message }: ErrorMessageProps) => {
  return <StyledContainer>{message}</StyledContainer>;
});

ErrorMessage.displayName = 'ErrorMessage';

const StyledContainer = styled.div`
  font-size: 12px;
  color: var(--error);
`;

export default ErrorMessage;
