import LoginForm from 'components/Auth/LoginForm';

import { useDispatch } from 'react-redux';
import { Login } from 'redux/auth/operations';
import { Container } from 'stylesheets/Container.styled';
import {  BoxAuth } from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const hendeLSumdit = e => {
    dispatch(Login(e));
  };

  return (
    <Container>
      <BoxAuth>
          <LoginForm hendeLSumdit={hendeLSumdit} />
      </BoxAuth>
    </Container>
  );
};

export default LoginPage;
