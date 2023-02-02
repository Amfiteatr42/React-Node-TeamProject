import { BoxAuth } from 'stylesheets/Auth.styled';

import { useDispatch } from 'react-redux';
import { Register } from 'redux/auth/operations';
import RegisterForm from 'components/Auth/RegisterForm';
import { Container } from 'stylesheets/Container.styled';
import { useState } from 'react';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [next, setNext] = useState(false);

  const hendelPassword = (password, cPassword) => {
    password === cPassword ? setError(true) : setError(false);
  };

  const hendeLSumdit = ({ password, email, userName, city, phone }) => {
    if (error) {
      dispatch(Register({ password, email, userName, city, phone }));
    }
  };

  const hendeLNext = e => {
    const open = e.target.value;
    open === 'true' ? setNext(false) : setNext(true);
  };

  return (
    <Container>
      <BoxAuth>
        <RegisterForm
          hendeLSumdit={hendeLSumdit}
          error={error}
          hendelPassword={hendelPassword}
          hendeLNext={hendeLNext}
          next={next}
        />
      </BoxAuth>
    </Container>
  );
};

export default RegistrationPage;
