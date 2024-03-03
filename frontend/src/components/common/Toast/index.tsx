import { memo } from 'react';
import { keyframes, styled } from 'styled-components';

const Toast = memo(({ message }: { message: string }) => (
  <StyledContainer>{message}</StyledContainer>
));

Toast.displayName = 'Toast';

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledContainer = styled.header`
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  padding: 1.2rem 1.2rem;
  background-color: var(--primary);
  border-radius: 8px;
  font-size: 12px;
  color: var(--white);
  text-align: center;
  animation: ${fadeOut} 0.3s ease-in-out forwards;
`;

export default Toast;
