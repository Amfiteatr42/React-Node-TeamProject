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
  Error,
  Label,
  BoxChek,
  Chek,
} from 'stylesheets/Auth.styled';
import { ValidateRegister } from './validate/Validate';

const RegisterForm = ({
  hendeLSumdit,
  hendelPassword,
  hendeLNext,
  next,
  chek,
  validationError,
}) => {
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
          validate={e => {
            if (e.password || e.email) {
              hendelPassword(e.password, e.cPassword, e.email);
            }
            return;
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
                    <Label>
                      <Input
                        name="userName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.userName}
                        placeholder="Name"
                      />
                      {touched.userName && errors.userName && (
                        <Error>{errors.userName}</Error>
                      )}
                    </Label>
                    <Label>
                      <Input
                        name="city"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="City, region"
                        value={values.city}
                      />{' '}
                      {touched.city && errors.city && (
                        <Error>{errors.city}</Error>
                      )}
                    </Label>
                    <Label>
                      <Input
                        name="phone"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="phone"
                        value={values.phone}
                        placeholder="Mobile phone"
                      />
                      {touched.phone && errors.phone && (
                        <Error>{errors.phone}</Error>
                      )}
                    </Label>
                  </Box>
                  <AuthButton type="submit" style={{ marginBottom: '16px' }}>
                    Register
                  </AuthButton>
                </>
              ) : (
                <>
                  <Box>
                    <Label>
                      <Input
                        name="email"
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Email"
                        value={values.email}
                      />
                      {touched.email && errors.email && (
                        <Error>{errors.email}</Error>
                      )}
                    </Label>
                    <Label>
                      <Input
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Password"
                        value={values.password}
                      />
                      {touched.password && errors.password && (
                        <Error>{errors.password}</Error>
                      )}
                    </Label>
                    <Label>
                      <Input
                        style={{ marginBottom: '0px' }}
                        name="cPassword"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Confirm Password"
                        value={values.cPassword}
                      />
                    </Label>
                    <BoxChek>
                      <Chek style={chek}></Chek>
                    </BoxChek>
                  </Box>
                </>
              )}
            </AuthForm>
          )}
        </Formik>
      </div>
      <AuthButton
        name="button"
        value={next}
        onClick={hendeLNext}
        next={next}
        validationError={validationError}
      >
        {next ? 'Back' : 'Next'}
      </AuthButton>
      <AuthTitleh3>
        Already have an account?
        <NavLink style={link} to="/login">
          Login
        </NavLink>
      </AuthTitleh3>
    </AuthBox>
  );
};

export default RegisterForm;
