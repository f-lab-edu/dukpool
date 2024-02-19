import {
  createContext,
  useState,
  Fragment,
  useEffect,
  cloneElement,
} from 'react';
import { useLocation } from 'react-router-dom';

type ModalProps = {
  openModal: <T extends {}>(element: React.ReactElement) => Promise<T>;
  hideModal: () => void;
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ModalContext = createContext<ModalProps>({
  openModal: async () => Promise.resolve({} as any),
  hideModal: () => {},
});

const ModalProvider = ({ children }: Props): JSX.Element => {
  const [modals, setModals] = useState<React.ReactElement[]>([]);
  const location = useLocation();

  useEffect(() => {
    setModals([]);
  }, [location]);

  const openModal = <T extends {}>(element: React.ReactElement): Promise<T> => {
    const promiseResolver = () => {
      let resolveFn: (value: T) => void = () => {};
      let rejectFn: (ex: Error) => void = () => {};
      const promise: Promise<T> = new Promise((resolve, reject) => {
        resolveFn = resolve;
        rejectFn = reject;
      });
      return { promise, resolveFn, rejectFn };
    };
    const { promise, resolveFn, rejectFn } = promiseResolver();

    const modal: React.ReactElement = cloneElement(element, {
      onSubmit: (value: T) => {
        resolveFn(value);
        setModals((prev) => prev.slice(0, -1));
      },
      onAbort: (ex: Error) => {
        rejectFn(ex);
        setModals((prev) => prev.slice(0, -1));
      },
    });
    setModals((prev) => [...prev, modal]);
    return promise;
  };

  const hideModal = () => {
    modals.at(-1)?.props.onSubmit(false);
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
