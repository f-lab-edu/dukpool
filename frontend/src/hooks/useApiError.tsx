import LoginModal from '@components/common/Modal/LoginModal';
import { ModalContext } from '@context/ModalContext';
import { ToastContext } from '@context/ToastContext';
import {
  ExpiredRefreshTokenError,
  ServerError,
  UnAuthorizedError,
} from '@utils/errors';
import { useContext } from 'react';

const useApiError = () => {
  const { showToast } = useContext(ToastContext);
  const { openModal } = useContext(ModalContext);

  const defaultMutationHandler = (error: Error) => {
    if (error instanceof ExpiredRefreshTokenError) {
      showToast('토큰이 만료되었습니다. 다시 로그인해주세요');
    }
    if (error instanceof ServerError) {
      showToast('네트워크 요청에 실패했습니다. 잠시후 다시 시도해주세요.');
    }
    if (error instanceof UnAuthorizedError) {
      openModal(<LoginModal />).catch(() => false);
    }
  };

  return { defaultMutationHandler };
};

export default useApiError;
