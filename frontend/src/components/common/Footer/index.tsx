import { styled } from 'styled-components';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import GithubLogo from '@assets/logo/github-logo.svg';

const Footer = memo(() => (
  <StyledFooter>
    <StyledFooterInfo>
      <p>나의 덕질을 공유해보세요!</p>
      <p>취향 공유 플랫폼 Dukpool입니다.</p>
    </StyledFooterInfo>
    <StyledLine>
      <div>
        <p>COPYRIGHT © 2023 DUKPOOL ALL RIGHTS RESERVED</p>
      </div>
      <Link target="_blank" to="https://github.com/f-lab-edu/dukpool">
        <StyledLogo src={GithubLogo} />
      </Link>
    </StyledLine>
  </StyledFooter>
));

Footer.displayName = 'Footer';

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-size: 11px;
  padding: 2.4rem;
  background-color: var(--gray-6);
`;

const StyledFooterInfo = styled.div`
  margin-bottom: 1.2rem;
  & > p {
    padding: 0.2rem 0;
  }
`;

const StyledLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLogo = styled.img`
  width: 20px;
`;

export default Footer;
