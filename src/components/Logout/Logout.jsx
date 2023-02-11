import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { Button, Svg } from './Logout.styled';
import { ModalLogout } from '../ModalLogout/ModalLogout';
export const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Button type="button" onClick={() => setIsModalOpen(true)}>
        <Svg />
        Log Out
      </Button>
      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)}>
          <ModalLogout onCloseModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};
