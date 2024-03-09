import { memo } from 'react';
import styled from 'styled-components';
import likeIcon from '@assets/icons/like.svg';
import ActivelikeIcon from '@assets/icons/active-like.svg';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  isLiked: boolean;
  likeCount: number;
};

const LikeButton = memo(({ onClick, likeCount, isLiked }: ButtonProps) => {
  return (
    <StyledButtonContainer>
      <StyledButton type="button" onClick={onClick}>
        <StyledLogo alt="like" src={isLiked ? ActivelikeIcon : likeIcon} />
        <StyledCount>{likeCount}</StyledCount>
      </StyledButton>
    </StyledButtonContainer>
  );
});

LikeButton.displayName = 'LikeButton';

const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border: none;
  gap: 4px;
`;

const StyledLogo = styled.img`
  width: 20px;
  &: hover {
    filter: invert(0.5) sepia(1) saturate(10) hue-rotate(320deg);
  }
`;

const StyledCount = styled.span`
  font-size: 12px;
`;

export default LikeButton;
