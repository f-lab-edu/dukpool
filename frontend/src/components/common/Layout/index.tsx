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
  max-width: 100vw;
  min-height: 100vh;
`;

export default Layout;
