import { AuthBox } from 'stylesheets/Auth.styled';

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
    </AuthBox>
  );
};

export default RegistrationPage;
