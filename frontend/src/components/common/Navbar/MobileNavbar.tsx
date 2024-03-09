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
import { useAtomValue } from 'jotai';
import { loginStatusAtom } from '@atoms/authAtom';

const MobileNavbar = memo(() => {
  const isLoggined = useAtomValue(loginStatusAtom);
  const { pathname } = useLocation();
  return (
    <StyledNavbar>
      <StyledUl>
        <StyledItem>
          <Link to="/">
            <StyledLogo
              alt="홈"
              src={pathname === '/' ? FocusedHomeIcon : HomeIcon}
            />
            <p>홈</p>
          </Link>
        </StyledItem>
        <StyledItem>
          <Link to="/article">
            <StyledLogo
              alt="덕질자랑"
              src={pathname.includes('/article') ? FocusedEmojiIcon : EmojiIcon}
            />
            <p>덕질자랑</p>
          </Link>
        </StyledItem>
        <StyledItem>
          <Link to="/talk">
            <StyledLogo
              alt="덕질토크"
              src={pathname.includes('/talk') ? FocusedCoffeeIcon : CoffeeIcon}
            />
            <p>덕질토크</p>
          </Link>
        </StyledItem>
        <StyledItem>
          <Link to={isLoggined ? '/mypage' : '/login'}>
            <StyledLogo
              alt="유저"
              src={
                pathname.includes('/mypage') || pathname.includes('/login')
                  ? FocusedUserIcon
                  : UserIcon
              }
            />
            <p>{isLoggined ? '내정보' : '로그인'}</p>
          </Link>
        </StyledItem>
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
  background-color: var(--white);
`;

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 1.2rem;
  font-size: 10px;
  text-align: center;
`;

const StyledLogo = styled.img`
  width: 20px;
  margin-bottom: 4px;
`;

export default MobileNavbar;
