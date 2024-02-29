import useInnerHeight from '@hooks/useInnerHeight';
import { memo } from 'react';
import styled from 'styled-components';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = memo(({ children }: LayoutProps) => {
  const { height } = useInnerHeight();
  return <StyledLayout $height={height}>{children}</StyledLayout>;
});

Layout.displayName = 'Layout';

const StyledLayout = styled.main<{ $height: number }>`
  display: flex;
  flex-direction: column;
  max-width: 1240px;
  margin: 0 auto;
  margin-bottom: 60px;
  min-height: ${({ $height }) => `${$height}vh`};
`;

export default Layout;
