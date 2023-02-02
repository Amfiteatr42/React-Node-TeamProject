import { useDispatch } from 'react-redux';
import { Reset } from 'redux/auth/operations.js';
import { BtnNo, BtnYes, Container, Title } from './ModalLogout.styled.js';
export const ModalLogout = ({ onCloseModal }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Title>Log out of ?</Title>
      <Container>
        <BtnYes type="button" onClick={()=>{dispatch(Reset()); onCloseModal()}}>Log out</BtnYes>
        <BtnNo type="button" onClick={onCloseModal}>Cancel</BtnNo>
      </Container>
    </>
  );
};
