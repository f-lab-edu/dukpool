import { memo, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@styles/media';
import { AuthContext } from '@context/AuthContext';

const Navbar = memo(() => {
  const { isLoggined } = useContext(AuthContext);
  const { pathname } = useLocation();
  return (
    <StyledNavbar>
      <StyledUl>
        <Link to="/">
          <StyledItem $active={pathname === '/'}>
            <p>홈</p>
          </StyledItem>
        </Link>
        <Link to="/article">
          <StyledItem $active={pathname.includes('/article')}>
            <p>덕질자랑</p>
          </StyledItem>
        </Link>
        <Link to="/talk">
          <StyledItem $active={pathname.includes('/talk')}>
            <p>덕질토크</p>
          </StyledItem>
        </Link>
        <Link to="/mypage">
          <StyledItem $active={pathname.includes('/mypage')}>
            <p>{isLoggined ? '내정보' : '로그인'}</p>
          </StyledItem>
        </Link>
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
  & > p {
    color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--black)')};
  }
  border-radius: 12px;
`;

export default Navbar;
