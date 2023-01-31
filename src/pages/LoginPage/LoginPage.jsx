import LoginForm from 'components/Auth/LoginForm';
import { useDispatch } from 'react-redux';

import { Login } from 'redux/auth/operations';
import { AuthBox } from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const hendeLSumdit = (e, email, password) => {
    e.preventDefault();
    dispatch(Login(email, password));
  };

  return (
    <AuthBox>
      <LoginForm hendeLSumdit={hendeLSumdit} />
    </AuthBox>
  );
};

export default LoginPage;
