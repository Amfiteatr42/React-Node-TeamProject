// This reusable Modal component expects method to close modal and children to render.
// Example of usage:
/*
1. Declare a state in your component.  
const [isModalOpen, setIsModalOpen] = useState(false);

2. Render according to this state and send by props onCloseModal method.
  {isModalOpen && (
    <Modal onCloseModal={() => setIsModalOpen(false)}>
      <YourModalComponent />
    </Modal>
  )} 
*/

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, CloseBtn, ModalWindow, Svg } from './Modal.styled';


export function Modal({ children, onCloseModal }) {
  useEffect(() => {
    function closeOnESC(e) {
      if (e.keyCode === 27) {
        onCloseModal();
        return;
      }
    }
    document.body.addEventListener('keydown', closeOnESC);

    return () => {
      document.body.removeEventListener('keydown', closeOnESC);
    };
  }, [onCloseModal]);

  function closeOnBackdropClick(e) {
    if (e.currentTarget === e.target) {
      onCloseModal();
    }
  }

  return createPortal(
    <Backdrop onClick={closeOnBackdropClick}>
      <ModalWindow>
        <CloseBtn type="button" onClick={onCloseModal}>
          <Svg />
        </CloseBtn>
        {children}
      </ModalWindow>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
}
