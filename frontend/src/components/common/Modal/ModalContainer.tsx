import { ModalContext } from '@context/ModalContext';
import { Fragment, useContext } from 'react';

const ModalContainer = () => {
  const { modals } = useContext(ModalContext);
  return (
    <>
      {modals.map((modal, idx) => (
        <Fragment key={idx}>{modal}</Fragment>
      ))}
    </>
  );
};

export default ModalContainer;
