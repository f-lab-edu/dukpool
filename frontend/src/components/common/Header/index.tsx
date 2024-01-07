import { memo } from 'react';
import { styled } from 'styled-components';
import Logo from '@assets/logo/dukpool-logo.svg';
import Navbar from '../Navbar';
import { media } from '@styles/media';
import { Link } from 'react-router-dom';

const Header = memo(() => (
  <StyledHeader>
    <Link to={'/'}>
      <StyledLogo src={Logo} />
    </Link>
    <Navbar />
  </StyledHeader>
));

Header.displayName = 'Header';

const StyledHeader = styled.header`
  z-index: 9;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 1.2rem 2.4rem;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 0px 5px var(--gray-4);
  ${media.tablet`
  justify-content: center;
  `}
`;

const StyledLogo = styled.img`
  width: 136px;
`;

export default Header;
