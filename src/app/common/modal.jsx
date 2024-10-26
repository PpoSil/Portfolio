import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { ModalBackground, ModalWrapper, ModalIcon } from './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;

    setTimeout(() => {
      onClose();
    }, 2000);
  }, [isOpen, onClose]);

  return isOpen
    ? createPortal(
        <ModalBackground className="modal">
          <ModalWrapper className="modal-content">
            {children}
            <ModalIcon />
          </ModalWrapper>
        </ModalBackground>,
        document.body,
      )
    : null;
};

export default Modal;
