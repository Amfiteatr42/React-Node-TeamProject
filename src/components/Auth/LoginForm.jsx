import { NavLink } from 'react-router-dom';
import { Formik } from 'formik';
import {
  AuthButton,
  AuthForm,
  Input,
  AuthTitleh2,
  AuthTitleh3,
  Box,
  AuthBox,
  link,
} from 'stylesheets/Auth.styled';
import { ValidateLogin } from './validate/Validate';

const LoginForm = ({ hendeLSumdit }) => {
  return (
    <AuthBox>
      <AuthTitleh2>Login</AuthTitleh2>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={ValidateLogin}
        onSubmit={values => {
          console.log(values);
          hendeLSumdit(values);
        }}>
        {({
          touched,
          errors,
          values,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <AuthForm onSubmit={handleSubmit}>
            <Box>
              <Input
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="email"
                placeholder="Email"
              />
               {touched.email && errors.email && <div>{errors.email}</div>}
              <Input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
                type="password"
                placeholder="Password"
              />
               {touched.password && errors.password && <div>{errors.password}</div>}
            </Box>
            <AuthButton type="submit" style={{ marginBottom:"0px" }}>Login</AuthButton>
          </AuthForm>
        )}
      </Formik>
      <AuthTitleh3>
        Don't have an account?
        <NavLink
         style={link}
          to="/register"
        >
          Register
        </NavLink>
      </AuthTitleh3>
    </AuthBox>
  );
};

export default LoginForm;
