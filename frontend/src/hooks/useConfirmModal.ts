import { isConfirmModalAtom, writeConfirmModalAtom } from '@atoms/modalAtom';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';

type ModalPromise = {
  resolve: () => void;
  reject: () => void;
};

const useConfirmModal = () => {
  const isModal = useAtomValue(isConfirmModalAtom);
  const setModal = useSetAtom(writeConfirmModalAtom);
  const [modalPromise, setModalPromise] = useState<ModalPromise | null>(null);

  const openModal = (type: 'post' | 'comment' | 'resign'): Promise<void> => {
    return new Promise((resolve, reject) => {
      setModal({ action: type, value: true });
      setModalPromise({ resolve, reject });
    });
  };

  const hideModal = (type: 'post' | 'comment' | 'resign') => {
    if (modalPromise && isModal[type]) {
      console.log('rejected!');
      modalPromise.reject();
      setModal({ action: type, value: false });
    }
  };

  const confirmModal = (type: 'post' | 'comment' | 'resign') => {
    if (modalPromise && isModal[type]) {
      console.log('resolved!');
      modalPromise.resolve();
      setModal({ action: type, value: false });
    }
  };

  return {
    isCommentConfirm: isModal.comment,
    isPostConfirm: isModal.post,
    isResignConfirm: isModal.resign,
    openModal,
    hideModal,
    confirmModal,
  };
};

export default useConfirmModal;
