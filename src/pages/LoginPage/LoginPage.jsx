import LoginForm from 'components/Auth/LoginForm';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { fetchCurrentUser, Login } from 'redux/auth/operations';
import { Container } from 'stylesheets/Container.styled';
import {  BoxAuth } from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
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
