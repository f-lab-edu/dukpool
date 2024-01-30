import { modalAtom } from '@atoms/modalAtom';
import { useAtom } from 'jotai';
import { useEffect, useRef } from 'react';

function useModal() {
  const [isModal, setModal] = useAtom(modalAtom);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isModal]);

  const handleOutsideClick = (e: Event) => {
    const current = modalRef.current;
    if (isModal && current && !current.contains(e.target as Node)) {
      setModal(false);
    }
  };

  const closeModal = () => {
    setModal(false);
  };

  return { isModal, modalRef, closeModal };
}

export default useModal;
