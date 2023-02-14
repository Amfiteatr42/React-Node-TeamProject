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

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, CloseBtn, ModalWindow, Svg } from './Modal.styled';

export function Modal({ children, onCloseModal, learnMoreModal }) {
  const [fadeType, setFadeType] = useState(null);

  useEffect(() => {
    setFadeType('in');

    function closeOnESC(e) {
      if (e.keyCode === 27) {
        setFadeType('out');
        return;
      }
    }
    document.body.addEventListener('keydown', closeOnESC);

    return () => {
      document.body.removeEventListener('keydown', closeOnESC);
    };
  }, []);

  function closeOnBackdropClick(e) {
    if (e.currentTarget === e.target) {
      setFadeType('out');
    }
  }

  function transitionEnd(e) {
    if (e.propertyName !== 'opacity' || fadeType === 'in') return;
    if (fadeType === 'out') {
      onCloseModal();
    }
  }

  return createPortal(
    <Backdrop
      onClick={closeOnBackdropClick}
      onTransitionEnd={transitionEnd}
      fadeType={fadeType}
    >
      <ModalWindow learnMoreModal={learnMoreModal} fadeType={fadeType}>
        <CloseBtn type="button" onClick={() => setFadeType('out')}>
          <Svg />
        </CloseBtn>
        {children}
      </ModalWindow>
    </Backdrop>,
    document.querySelector('#modal-root')
  );
}
