import LoginForm from 'components/Auth/LoginForm';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Login } from 'redux/auth/operations';
import { AuthBox, AuthTitleh3 } from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const dispatch = useDispatch();
  const hendeLSumdit = (e, email, password) => {
    e.preventDefault();
    dispatch(Login(email, password));
  };

  return (
    <AuthBox>
      <LoginForm hendeLSumdit={hendeLSumdit} />
      <AuthTitleh3>
        Don't have an account?
        <NavLink
          style={{ borderBottom: '1px solid', color: '#3091EB' }}
          to="/register"
        >
          Register
        </NavLink>
      </AuthTitleh3>
    </AuthBox>
  );
};

export default LoginPage;
