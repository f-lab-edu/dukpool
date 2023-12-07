import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '@assets/icons/outlined-home.svg';
import EmojiIcon from '@assets/icons/outlined-emoji.svg';
import CoffeeIcon from '@assets/icons/outlined-coffee.svg';
import UserIcon from '@assets/icons/outlined-user.svg';
import FocusedHomeIcon from '@assets/icons/filled-home.svg';
import FocusedEmojiIcon from '@assets/icons/filled-emoji.svg';
import FocusedCoffeeIcon from '@assets/icons/filled-coffee.svg';
import FocusedUserIcon from '@assets/icons/filled-user.svg';

const MobileNavbar = memo(() => {
  const { pathname } = useLocation();
  return (
    <StyledNavbar>
      <StyledUl>
        <Link to="/">
          <StyledList>
            <StyledLogo src={pathname === '/' ? FocusedHomeIcon : HomeIcon} />
            <p>홈</p>
          </StyledList>
        </Link>
        <Link to="/article">
          <StyledList>
            <StyledLogo
              src={pathname.includes('/article') ? FocusedEmojiIcon : EmojiIcon}
            />
            <p>덕질자랑</p>
          </StyledList>
        </Link>
        <Link to="/talk">
          <StyledList>
            <StyledLogo
              src={pathname.includes('/talk') ? FocusedCoffeeIcon : CoffeeIcon}
            />
            <p>덕질토크</p>
          </StyledList>
        </Link>
        <Link to="/mypage">
          <StyledList>
            <StyledLogo
              src={pathname.includes('/mypage') ? FocusedUserIcon : UserIcon}
            />
            <p>내정보</p>
          </StyledList>
        </Link>
      </StyledUl>
    </StyledNavbar>
  );
});

MobileNavbar.displayName = 'MobileNavbar';

const StyledNavbar = styled.nav`
  width: 100%;
  position: fixed;
  bottom: 0;
  box-shadow: 0px 0px 5px var(--gray-4);
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const StyledList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 1.2rem;
  font-size: 12px;
`;

const StyledLogo = styled.img`
  width: 20px;
  margin-bottom: 4px;
`;

export default MobileNavbar;
