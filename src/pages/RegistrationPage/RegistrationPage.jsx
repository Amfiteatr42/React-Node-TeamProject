import { AuthBox } from 'stylesheets/Auth.styled';

import { useDispatch } from 'react-redux';
import { Register } from 'redux/auth/operations';
import RegisterForm from 'components/Auth/RegisterForm';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e, data) => {
    e.preventDefault();
    const beginWithoutDigit = /^\D.*$/;
    const withoutSpecialChars = /^[^-() /]*$/;
    const containsLetters = /^.*[a-zA-Z]+.*$/;
    const { password } = e;
    console.log(e);
    if (
      beginWithoutDigit.test(password) &&
      withoutSpecialChars.test(password) &&
      containsLetters.test(password)
    ) {
      dispatch(Register(data));
    } else {
      return
    }
  };

  return (
    <AuthBox>
      <RegisterForm handleSubmit={handleSubmit} />
    </AuthBox>
  );
};

export default RegistrationPage;
