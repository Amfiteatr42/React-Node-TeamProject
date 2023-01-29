import { LearnMoreModal } from 'components/LearnMoreModal/LearnMoreModal';
import { Modal } from 'components/Modal/Modal';
import { useEffect } from 'react';
import { useState } from 'react';
import { HeroContainer, MainTitle } from './HomePage.styled';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isModalOpen]);
  return (
    <HeroContainer>
      <MainTitle>Take good care of your small pets</MainTitle>
      <button onClick={() => setIsModalOpen(true)}>OPEN</button>

      {isModalOpen && (
        <Modal onCloseModal={() => setIsModalOpen(false)}>
          <LearnMoreModal />
        </Modal>
      )}
    </HeroContainer>
  );
};

export default HomePage;
