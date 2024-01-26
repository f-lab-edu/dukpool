import { memo } from 'react';
import styled from 'styled-components';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  text: string;
  disabled: boolean;
  $colorType: 'dark' | 'light';
  type?: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = memo(
  ({ text, disabled, onClick, $colorType, type = 'button' }: ButtonProps) => {
    return (
      <StyledButton
        type={type}
        onClick={onClick}
        disabled={disabled}
        $colorType={$colorType}
      >
        {text}
      </StyledButton>
    );
  },
);

Button.displayName = 'Button';

const StyledButton = styled.button<{ $colorType: 'dark' | 'light' }>`
  width: 100%;
  max-width: 400px;
  padding: 0.8rem 1.2rem;
  background-color: var(--primary);
  color: ${({ $colorType }) =>
    $colorType === 'dark' ? 'var(--white)' : 'var(--black)'};
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  &:disabled {
    background-color: ${({ $colorType }) =>
      $colorType === 'dark' ? 'gray' : 'black'};
  }
`;

export default Button;
