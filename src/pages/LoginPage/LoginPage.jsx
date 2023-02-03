import LoginForm from 'components/Auth/LoginForm';
import { ValidateLogin } from 'components/Auth/validate/Validate';
import { Formik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Login } from 'redux/auth/operations';
import {  getAuthLoginError } from 'redux/auth/selectors';
import { Container } from 'stylesheets/Container.styled';
import {
  AutContainer,
  AuthBox,
  AuthButton,
  AuthTitleh2,
  AuthTitleh3,
  BoxAuth,
  link,
  margin,
} from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const LoginError = useSelector(getAuthLoginError);
  const dispatch = useDispatch();

  const hendeLSumdit = async e => {
    dispatch(Login(e));
  };

  return (
    <Container>
      <BoxAuth>
        <AuthBox>
          <AuthTitleh2>Login</AuthTitleh2>

          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={ValidateLogin}
            onSubmit={hendeLSumdit}
          >
            {({
              touched,
              errors,
              values,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <LoginForm
                handleSubmit={handleSubmit}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
                touched={touched}
                errors={errors}
              />
            )}
          </Formik>
          {LoginError && (
            <AuthButton style={margin}>Email or password is wrong</AuthButton>
          )}
          <AuthTitleh3>
            Don't have an account?
            <NavLink style={link} to="/register">
              Register
            </NavLink>
          </AuthTitleh3>
        </AuthBox>
      </BoxAuth>
      <AutContainer></AutContainer>
    </Container>
  );
};

export default LoginPage;
