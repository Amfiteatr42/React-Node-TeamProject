// import { Formik, Form } from 'formik';
import { useState } from 'react';
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
  ErrorH3,
} from 'stylesheets/Auth.styled';
import { ValidateRegister } from './validate/Validate';

const RegisterForm = ({ hendeLSumdit }) => {
  const [next, setNext] = useState(false);
  const hendeLNext = e => {
    const open = e.target.value;
    if (open === 'true') {
      setNext(false);
    } else {
      setNext(true);
    }
  };
  return (
    <AuthBox>
      <AuthTitleh2>Register</AuthTitleh2>
      <div>
        <Formik
          initialValues={{
            userName: '',
            phone: '',
            city: '',
            email: '',
            password: '',
            cPassword: '',
          }}
          validationSchema={ValidateRegister}
          onSubmit={values => {
            hendeLSumdit(values);
          }}
        >
          {({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <AuthForm onSubmit={handleSubmit}>
              {next ? (
                <>
                  <Box>
                    <Input
                      name="userName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.userName}
                      placeholder="Name"
                    />
                    {touched.userName && errors.userName && (
                      <ErrorH3>{errors.userName}</ErrorH3>
                    )}
                    <Input
                      name="city"
                      type="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="City, region"
                      value={values.city}
                    />{' '}
                    {touched.city && errors.city && <ErrorH3>{errors.city}</ErrorH3>}
                    <Input
                      style={{ marginBottom: '0px' }}
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      type="phone"
                      value={values.phone}
                      placeholder="Mobile phone"
                    />
                    {touched.phone && errors.phone && <ErrorH3>{errors.phone}</ErrorH3>}
                  </Box>
                  <AuthButton type="submit" style={{ marginBottom: '16px' }}>
                    submit
                  </AuthButton>
                </>
              ) : (
                <>
                  <Box>
                    <Input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Email"
                      value={values.email}
                    />
                    {touched.email && errors.email && <ErrorH3>{errors.email}</ErrorH3>}
                    <Input
                      name="password"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Password"
                      value={values.password}
                    />
                    {touched.password && errors.password && (
                      <ErrorH3>{errors.password}</ErrorH3>
                    )}
                    <Input
                      style={{ marginBottom: '0px' }}
                      name="cPassword"
                      type="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Confirm Password"
                      value={values.cPassword}
                    />
                  </Box>
                </>
              )}
            </AuthForm>
          )}
        </Formik>
      </div>
      <AuthButton name="button" value={next} onClick={hendeLNext}>
        {next ? 'Back' : 'Next'}
      </AuthButton>
      <AuthTitleh3>
        Don't have an account?
        <NavLink style={link} to="/login">
          login
        </NavLink>
      </AuthTitleh3>
    </AuthBox>
  );
};

export default RegisterForm;
