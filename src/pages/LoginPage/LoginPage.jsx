import LoginForm from 'components/Auth/LoginForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchCurrentUser, Login } from 'redux/auth/operations';
import { AuthBox } from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const hendeLSumdit = (e, data) => {
    e.preventDefault();
    dispatch(Login(data));
  };

  return (
    <AuthBox>
      <LoginForm hendeLSumdit={hendeLSumdit} />
    </AuthBox>
  );
};

export default LoginPage;
