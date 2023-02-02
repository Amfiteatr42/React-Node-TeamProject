import LoginForm from 'components/Auth/LoginForm';
import { ValidateLogin } from 'components/Auth/validate/Validate';
import { Formik } from 'formik';

import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Login } from 'redux/auth/operations';
import { Container } from 'stylesheets/Container.styled';
import {
  AuthBox,
  AuthTitleh2,
  AuthTitleh3,
  BoxAuth,
  link,
} from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const dispatch = useDispatch();

  const hendeLSumdit = e => {
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
          <AuthTitleh3>
            Don't have an account?
            <NavLink style={link} to="/register">
              Register
            </NavLink>
          </AuthTitleh3>
        </AuthBox>
      </BoxAuth>
    </Container>
  );
};

export default LoginPage;
