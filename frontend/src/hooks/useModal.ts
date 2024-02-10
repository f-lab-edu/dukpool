import {
  isConfirmModalAtom,
  modalPromiseAtom,
  writeConfirmModalAtom,
} from '@atoms/modalAtom';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';

type ModalType = 'post' | 'comment' | 'resign' | 'login';

const useModal = () => {
  const isModal = useAtomValue(isConfirmModalAtom);
  const setModal = useSetAtom(writeConfirmModalAtom);
  const [modalPromise, setModalPromise] = useAtom(modalPromiseAtom);

  const openModal = (type: ModalType) => {
    return new Promise((resolve) => {
      setModal({ action: type, value: true });
      setModalPromise({ resolve });
    });
  };

  const hideModal = (type: ModalType) => {
    if (modalPromise && isModal[type]) {
      console.log('rejected!');
      modalPromise.resolve(false);
      setModal({ action: type, value: false });
      setModalPromise(null);
    }
  };

  const confirmModal = (type: ModalType) => {
    if (modalPromise && isModal[type]) {
      console.log('resolved!');
      modalPromise.resolve(true);
      setModal({ action: type, value: false });
      setModalPromise(null);
    }
  };

  const hideAllModals = () => {
    hideModal('post');
    hideModal('comment');
    hideModal('resign');
    hideModal('login');
  };

  return {
    isCommentModal: isModal.comment,
    isPostModal: isModal.post,
    isResignModal: isModal.resign,
    isLoginModal: isModal.login,
    openModal,
    hideModal,
    confirmModal,
    hideAllModals,
  };
};

export default useModal;
