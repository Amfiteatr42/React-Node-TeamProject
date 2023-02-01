import { BoxAuth } from 'stylesheets/Auth.styled';

import { useDispatch } from 'react-redux';
import { Register } from 'redux/auth/operations';
import RegisterForm from 'components/Auth/RegisterForm';
import { Container } from 'stylesheets/Container.styled';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const hendeLSumdit = e => {
    const { password, cPassword, email, userName, city, phone } = e;
    if (password === cPassword) {
      console.log(e);
      dispatch(Register({ password, email, userName, city, phone }));
    }
    console.log(e);
  };

  return (
    <Container>
      <BoxAuth>
        <RegisterForm hendeLSumdit={hendeLSumdit} />
      </BoxAuth>
    </Container>
  );
};

export default RegistrationPage;
