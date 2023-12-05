import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '@styles/media';

type NavbarProps = {
  id: number;
  text: string;
  path: string;
};

const NAVBAR_LIST: NavbarProps[] = [
  { id: 1, text: '홈', path: '/' },
  { id: 2, text: '덕질자랑', path: '/article' },
  { id: 3, text: '덕질토크', path: '/talk' },
  { id: 4, text: '내정보', path: '/mypage' },
];

const Navbar = memo(() => (
  <StyledNavbar>
    <StyledUl>
      {NAVBAR_LIST.map(({ id, text, path }) => (
        <StyledList key={id}>
          <Link to={path}>{text}</Link>
        </StyledList>
      ))}
    </StyledUl>
  </StyledNavbar>
));

Navbar.displayName = 'Navbar';

const StyledNavbar = styled.nav`
  ${media.phone`
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
