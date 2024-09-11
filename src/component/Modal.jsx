import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close: () => {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
});
export default Modal;
