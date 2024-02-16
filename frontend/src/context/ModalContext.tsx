import {
  createContext,
  useState,
  Fragment,
  useEffect,
  cloneElement,
} from 'react';
import { useLocation } from 'react-router-dom';

type ModalProps = {
  openModal: (element: React.ReactElement) => Promise<unknown>;
  hideModal: () => void;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ModalContext = createContext<ModalProps>({
  openModal: async () => {},
  hideModal: () => {},
});

const ModalProvider = ({ children }: Props): JSX.Element => {
  const [modals, setModals] = useState<React.ReactElement[]>([]);
  const location = useLocation();

  useEffect(() => {
    setModals([]);
  }, [location]);

  const openModal = (element: React.ReactElement): Promise<unknown> => {
    const promiseResolver = () => {
      let resolveFn;
      const promise = new Promise((resolve) => {
        resolveFn = resolve;
      });
      return { promise, resolveFn };
    };
    const { promise, resolveFn } = promiseResolver();

    const modal: React.ReactElement = cloneElement(element, {
      resolveFn,
    });
    setModals((prev) => [...prev, modal]);
    return promise;
  };

  const hideModal = () => {
    setModals((prev) => prev.slice(0, -1));
  };

  return (
    <ModalContext.Provider value={{ openModal, hideModal }}>
      {children}
      {modals.map((modal, idx) => (
        <Fragment key={idx}>{modal}</Fragment>
      ))}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
