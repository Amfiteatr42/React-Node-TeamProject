import { AuthBox, AuthTitleh3 } from 'stylesheets/Auth.styled';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Register } from 'redux/auth/operations';
import RegisterForm from 'components/Auth/RegisterForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const hendeLSumdit = e => {
    e.preventDefault();
    dispatch(Register({}));
  };

  return (
    <AuthBox>
      <RegisterForm hendeLSumdit={hendeLSumdit} />
      <AuthTitleh3>
        Don't have an account?
        <NavLink
          style={{ borderBottom: '1px solid', color: '#3091EB' }}
          to="/login"
        >
          login
        </NavLink>
      </AuthTitleh3>
    </AuthBox>
  );
};

export default RegistrationPage;
