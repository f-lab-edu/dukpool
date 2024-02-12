import { createContext, useEffect, useState } from 'react';
import Modal from '@components/common/Modal';
import { useLocation } from 'react-router-dom';

type ModalType = 'post' | 'comment' | 'resign' | 'login';

type ModalState = {
  isOpen: boolean;
  resolveFn: ((value?: boolean) => void) | null;
};

type InitialModalStateType = {
  [key in ModalType]: ModalState;
};

const initialModalState: InitialModalStateType = {
  post: { isOpen: false, resolveFn: null },
  comment: { isOpen: false, resolveFn: null },
  resign: { isOpen: false, resolveFn: null },
  login: { isOpen: false, resolveFn: null },
};

type ModalProps = {
  openModal: (type: ModalType) => Promise<unknown>;
  hideModal: (type: ModalType) => void;
  confirmModal: (type: ModalType) => void;
  hideAllModals: () => void;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ModalContext = createContext<ModalProps>({
  openModal: async () => {},
  hideModal: () => {},
  confirmModal: () => {},
  hideAllModals: () => {},
});

const ModalProvider = ({ children }: Props): JSX.Element => {
  const [isModal, setIsModal] = useState(initialModalState);
  const location = useLocation();

  useEffect(() => {
    hideAllModals();
  }, [location]);

  const openModal = (type: ModalType) => {
    return new Promise((resolve) => {
      setIsModal((prevModal) => ({
        ...prevModal,
        [type]: { isOpen: true, resolveFn: resolve },
      }));
    });
  };

  const hideModal = (type: ModalType) => {
    if (isModal[type].isOpen && isModal[type].resolveFn) {
      console.log('rejected!');
      isModal[type].resolveFn!(false);
      setIsModal((prevModal) => ({
        ...prevModal,
        [type]: { isOpen: false, resolveFn: null },
      }));
    }
  };

  const confirmModal = (type: ModalType) => {
    if (isModal[type].isOpen && isModal[type].resolveFn) {
      console.log(isModal[type]);
      isModal[type].resolveFn!(true);
      setIsModal((prevModal) => ({
        ...prevModal,
        [type]: { isOpen: false, resolveFn: null },
      }));
    }
  };

  const hideAllModals = () => {
    hideModal('post');
    hideModal('comment');
    hideModal('resign');
    hideModal('login');
  };

  return (
    <ModalContext.Provider
      value={{ openModal, hideModal, hideAllModals, confirmModal }}
    >
      {children}
      {Object.entries(isModal).map(([type, modalState]) => {
        if (modalState.isOpen) {
          return <Modal type={type as ModalType} key={type} />;
        }
      })}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
