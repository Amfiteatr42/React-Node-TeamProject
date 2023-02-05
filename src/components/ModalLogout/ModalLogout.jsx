import { useDispatch, useSelector } from 'react-redux';
import { Reset } from 'redux/auth/operations.js';
import { getAuthUser } from 'redux/auth/selectors.js';
import { BtnNo, BtnYes, Container, Title } from './ModalLogout.styled.js';
export const ModalLogout = ({ onCloseModal }) => {
  const dispatch = useDispatch();
const user = useSelector(getAuthUser)
  return (
    <>
      <Title>Log out of {user.userName}?</Title>
      <Container>
        <BtnYes type="button" onClick={()=>{dispatch(Reset()); onCloseModal()}}>Log out</BtnYes>
        <BtnNo type="button" onClick={onCloseModal}>Cancel</BtnNo>
      </Container>
    </>
  );
};
