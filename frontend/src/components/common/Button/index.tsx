import { memo } from 'react';
import styled from 'styled-components';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  text: string;
  disabled: boolean;
  $colorType?: 'primary' | 'light' | 'error';
  type?: 'button' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = memo(
  ({
    text,
    disabled,
    onClick,
    $colorType = 'primary',
    type = 'button',
  }: ButtonProps) => {
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

const StyledButton = styled.button<{
  $colorType: 'primary' | 'light' | 'error';
}>`
  width: 100%;
  max-width: 400px;
  padding: 0.8rem 1.2rem;
  background-color: ${({ $colorType }) => {
    switch ($colorType) {
      case 'primary':
        return 'var(--primary)';
      case 'light':
        return 'var(--gray-5)';
      case 'error':
        return 'var(--error)';
    }
  }};
  color: ${({ $colorType }) => {
    switch ($colorType) {
      case 'light':
        return 'var(--black)';
      default:
        return 'var(--white)';
    }
  }};
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 12px;
  &:disabled {
    background-color: ${({ $colorType }) =>
      $colorType === 'primary' ? 'gray' : 'black'};
  }
`;

export default Button;
