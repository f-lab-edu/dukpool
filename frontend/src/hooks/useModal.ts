import { modalStateAtom } from '@atoms/modalAtom';
import { useAtom } from 'jotai';

function useModal() {
  const [isModal, setModal] = useAtom(modalStateAtom);
  // useLayoutEffect

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return { isModal, openModal, closeModal };
}

export default useModal;
