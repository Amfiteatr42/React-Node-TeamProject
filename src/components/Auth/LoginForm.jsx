import {
  AuthButton,
  AuthForm,
  Input,
  Box,
  Error,
  Label,
} from 'stylesheets/Auth.styled';

const LoginForm = ({
  handleSubmit,
  handleBlur,
  handleChange,
  values,
  touched,
  errors,
}) => {
  return (
    <>
      <AuthForm onSubmit={handleSubmit}>
        <Box>
          <Label>
            <Input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              placeholder="Email"
            />
            {touched.email && errors.email && <Error>{errors.email}</Error>}
          </Label>
          <Label>
            <Input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name="password"
              type="password"
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <Error>{errors.password}</Error>
            )}
          </Label>
        </Box>
        <AuthButton type="submit" style={{ marginBottom: '0px' }}>
          Login
        </AuthButton>
      </AuthForm>
    </>
  );
};

export default LoginForm;
