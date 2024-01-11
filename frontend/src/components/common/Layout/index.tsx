import { memo } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = memo(({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
});

Layout.displayName = 'Layout';

const StyledLayout = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 80px;
`;

export default Layout;
