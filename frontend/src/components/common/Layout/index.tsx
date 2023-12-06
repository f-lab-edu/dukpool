import { memo } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = memo(({ children }: LayoutProps) => {
  return <StyledLayout>{children}</StyledLayout>;
});

Layout.displayName = 'Layout';

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  max-width: 1240px;
  min-height: 100vh;
  padding-top: 80px;
`;

export default Layout;
