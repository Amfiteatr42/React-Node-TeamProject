import { useState } from 'react';

import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthTitleh2,
  Box,
} from 'stylesheets/Auth.styled';

const LoginForm = ({ hendeLSumdit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <AuthTitleh2>Login</AuthTitleh2>
      <AuthForm onSubmit={e => hendeLSumdit(e, email, password)}>
        <Box>
          <AuthInput
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <AuthInput
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Box>
        <AuthButton name="submit">Login</AuthButton>
      </AuthForm>
    </>
  );
};

export default LoginForm;
