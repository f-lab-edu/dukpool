import { memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@styles/media';

const Navbar = memo(() => {
  // 유저 로그인 유무 확인
  const { pathname } = useLocation();
  return (
    <StyledNavbar>
      <StyledUl>
        <Link to="/">
          <StyledList $active={pathname === '/' ? true : false}>
            <p>홈</p>
          </StyledList>
        </Link>
        <Link to="/article">
          <StyledList $active={pathname.includes('/article') ? true : false}>
            <p>덕질자랑</p>
          </StyledList>
        </Link>
        <Link to="/talk">
          <StyledList $active={pathname.includes('/talk') ? true : false}>
            <p>덕질토크</p>
          </StyledList>
        </Link>
        <Link to="/mypage">
          <StyledList $active={pathname.includes('/mypage') ? true : false}>
            <p>내정보</p>
          </StyledList>
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

const StyledList = styled.li<{ $active: boolean }>`
  padding: 1.2rem 2rem;
  background-color: ${({ $active }) =>
    $active ? 'var(--primary-1)' : 'white'};
  & > p {
    color: ${({ $active }) => ($active ? 'var(--white)' : 'var(--black)')};
  }
  border-radius: 12px;
`;

export default Navbar;
