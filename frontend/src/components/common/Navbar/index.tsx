import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@styles/media';

const Navbar = memo(() => {
  // 유저 로그인 유무 확인
  return (
    <StyledNavbar>
      <StyledUl>
        <StyledList>
          <Link to="/">홈</Link>
        </StyledList>
        <StyledList>
          <Link to="/article">덕질자랑</Link>
        </StyledList>
        <StyledList>
          <Link to="/talk">덕질토크</Link>
        </StyledList>
        {/** 로그인 유무에 따라 로그인 또는 내정보 링크로 분기 */}
        <StyledList>
          <Link to="/mypage">내정보</Link>
        </StyledList>
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

const StyledList = styled.li`
  padding: 1.2rem 2.4rem;
`;

export default Navbar;
