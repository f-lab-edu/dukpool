import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@styles/media';
import { useAtomValue } from 'jotai';
import { loginStatusAtom } from '@atoms/authAtom';

const Navbar = memo(() => {
  const isLoggined = useAtomValue(loginStatusAtom);
  const { pathname } = useLocation();
  return (
    <StyledNavbar>
      <StyledUl>
        <StyledItem $active={pathname === '/'}>
          <Link to="/">
            <p>홈</p>
          </Link>
        </StyledItem>
        <StyledItem $active={pathname.includes('/article')}>
          <Link to="/article">
            <p>덕질자랑</p>
          </Link>
        </StyledItem>
        <StyledItem $active={pathname.includes('/talk')}>
          <Link to="/talk">
            <p>덕질토크</p>
          </Link>
        </StyledItem>
        <StyledItem
          $active={pathname.includes('/mypage') || pathname.includes('/login')}
        >
          <Link to={isLoggined ? '/mypage' : '/login'}>
            <p>{isLoggined ? '내정보' : '로그인'}</p>
          </Link>
        </StyledItem>
      </StyledUl>
    </StyledNavbar>
  );
});

Navbar.displayName = 'Navbar';

const StyledNavbar = styled.nav`
  ${media.tablet`
    display: none;
  `}
`;

const StyledUl = styled.ul`
  display: flex;
`;

const StyledItem = styled.li<{ $active: boolean }>`
  padding: 1.2rem 2rem;
  background-color: ${({ $active }) => ($active ? 'var(--primary)' : 'white')};
  & > a > p {
    color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--black)')};
  }
  border-radius: 12px;
`;

// const StyledSpan = styled.span`
// `

export default Navbar;
