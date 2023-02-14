import styled from 'styled-components';
import { RxCross1 } from 'react-icons/rx';
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2000;
  padding: 94px 15px;
  margin: 0 auto;
  background-color: var(--gray-2);
  backdrop-filter: blur(10px);
  overflow-y: scroll;
  opacity: ${({ fadeType }) => {
    if (fadeType === 'in') return '1';
    return '0';
  }};
  transition: var(--transition);
`;
export const ModalWindow = styled.div`
  background-color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  padding: ${({ learnMoreModal }) =>
    learnMoreModal ? '60px 20px 40px' : ' 40px 20px'};
  min-width: 280px;
  border-radius: 20px;
  transform: ${({ fadeType }) => {
    if (fadeType === 'in') return 'translate(-50%, -50%) scale(1)';
    return 'translate(-50%, -50%) scale(0.95)';
  }};
  transition: transform var(--transition);

  @media screen and (min-width: 767px) {
    padding: ${({ learnMoreModal }) =>
      learnMoreModal ? '32px 20px' : ' 40px 80px'};
    border-radius: var(--radius);
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  }
`;
export const CloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  background-color: var(--bg-basic);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 767px) {
    width: 44px;
    height: 44px;
  }
`;
export const Svg = styled(RxCross1)`
  width: 28px;
  height: 28px;
  @media screen and (min-width: 767px) {
    width: 32px;
    height: 32px;
  }
`;
