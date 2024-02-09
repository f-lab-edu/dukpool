import { memo } from 'react';
import styled from 'styled-components';
import LoginModal from '@components/common/Modal/LoginModal';
import useModal from '@hooks/useModal';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = memo(({ children }: LayoutProps) => {
  const { isModal } = useModal();
  return (
    <StyledLayout>
      {isModal ? <LoginModal /> : <></>}
      {children}
    </StyledLayout>
  );
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
