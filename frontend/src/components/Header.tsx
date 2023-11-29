import { styled } from 'styled-components';
import Logo from '@assets/logo/dukpool-logo.svg';
const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo src={Logo} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 1.2rem 2.4rem;
  background-color: white;
  border-bottom: 1px solid gray;
`;

const StyledLogo = styled.img`
  width: 136px;
`;

export default Header;
