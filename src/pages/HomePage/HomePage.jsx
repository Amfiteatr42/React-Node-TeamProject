import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import { HeroContainer, MainTitle } from './HomePage.styled';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <HeroContainer>
      <button onClick={() => setIsModalOpen(true)}>OPEN</button>
      <MainTitle>Take good care of your small pets</MainTitle>
      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)}>
          <p>alksjdlkasjd</p>
          <p>alksjdlkasjd</p>
          <p>alksjdlkasjd</p>
          <p>alksjdlkasjd</p>
          <p>alksjdlkasjd</p>
        </Modal>
      )}
    </HeroContainer>
  );
};

export default HomePage;
