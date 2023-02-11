import { Modal } from 'components/Modal/Modal';
import { ModalAddsPet } from 'components/ModalAddsPet/ModalAddsPet';
import { PetsList } from 'components/PetsList/PetsList';
import { useState } from 'react';
import { Container, Button, Text, Box, Icon } from './PetsData.styled';
export const PetsData = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Box>
        <PetsList />
      </Box>
      <Container>
        <Text>Add pet</Text>
        <Button onClick={() => setIsModalOpen(true)}>
          <Icon />
        </Button>
      </Container>
      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)}>
          <ModalAddsPet onCloseModal={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </>
  );
};
