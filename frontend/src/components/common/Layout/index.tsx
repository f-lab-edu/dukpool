import { memo, useEffect } from 'react';
import styled from 'styled-components';
import useModal from '@hooks/useModal';
import Modal from '@components/common/Modal';
import { useLocation } from 'react-router-dom';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = memo(({ children }: LayoutProps) => {
  const {
    isCommentModal,
    isPostModal,
    isResignModal,
    isLoginModal,
    hideAllModals,
  } = useModal();
  const location = useLocation();

  useEffect(() => {
    hideAllModals();
  }, [location]);

  return (
    <StyledLayout>
      {isCommentModal ? <Modal type="comment" /> : <></>}
      {isPostModal ? <Modal type="post" /> : <></>}
      {isResignModal ? <Modal type="resign" /> : <></>}
      {isLoginModal ? <Modal type="login" /> : <></>}
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
