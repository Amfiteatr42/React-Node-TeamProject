import LoginForm from 'components/Auth/LoginForm';
import { ValidateLogin } from 'components/Auth/validate/Validate';
import { Formik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { Login } from 'redux/auth/operations';
import { getAuthLoginError } from 'redux/auth/selectors';
import { Container } from 'stylesheets/Container.styled';
import {
  AutContainer,
  AuthBox,
  AuthTitleh2,
  AuthTitleh3,
  BoxAuth,
  link,
} from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const nav = useNavigate();
  const LoginError = useSelector(getAuthLoginError);
  const dispatch = useDispatch();

  const hendeLSumdit = async e => {
    dispatch(Login(e)).then(res => !res.error && nav('/user'));
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
          {!!LoginError && (
            <p style={{ marginTop: '25px', color: 'red' }}>
              Email or password is wrong
            </p>
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
