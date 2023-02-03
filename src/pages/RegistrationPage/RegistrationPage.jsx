import { AutContainer, BoxAuth } from 'stylesheets/Auth.styled';

import { useDispatch } from 'react-redux';
import { Register } from 'redux/auth/operations';
import RegisterForm from 'components/Auth/RegisterForm';
import { Container } from 'stylesheets/Container.styled';
import { useState } from 'react';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [next, setNext] = useState(false);
  const [chek, setChek] = useState({});
  const [userPassword, setUserPassword] = useState({});
  const [nextStyle, setNextStyle] = useState({ backgroundColor: 'red' });

  const hendelPassword = (password, cPassword) => {
    const good = { width: '100%', backgroundColor: '#24cca7' };
    const normally = { width: '45%', backgroundColor: 'orange' };
    const badly = { width: '25%', backgroundColor: 'red' };
    const refresh = { width: '0%', backgroundColor: '#E5F1EF' };
    if (password.length > 0 && password.length < 3) {
      setChek(refresh);
    }
    if (password.length > 3 && password.length < 7) {
      setChek(badly);
    }
    if (password.length >= 7 && password.length <= 12) {
      setChek(normally);
    }
    if (password.length >= 12 && password.length <= 32) {
      setChek(good);
    }
    setUserPassword({ password, cPassword });
    if (!hendelPasswordOn(password, cPassword)) {
      setNextStyle({ backgroundColor: 'red' });
      return;
    }
    setNextStyle({ backgroundColor: '#f59256' });
  };

  const hendeLSumdit = ({ password, email, userName, city, phone }) => {
    dispatch(Register({ password, email, userName, city, phone }));
  };

  const hendelPasswordOn = (password, cPassword) => {
    if (password === undefined) {
      return;
    }
    if (password === cPassword) {
      return true;
    }
  };

  const hendeLNext = e => {
    const open = e.target.value;
    const { password, cPassword } = userPassword;
    if (hendelPasswordOn(password, cPassword)) {
      open === 'true' ? setNext(false) : setNext(true);
    }
  };

  return (
    <Container>
      <BoxAuth>
        <RegisterForm
        nextStyle={nextStyle}
          userPassword={userPassword}
          chek={chek}
          hendeLSumdit={hendeLSumdit}
          hendelPassword={hendelPassword}
          hendeLNext={hendeLNext}
          next={next}
        />
      </BoxAuth>
      <AutContainer></AutContainer>
    </Container>
  );
};

export default RegistrationPage;
