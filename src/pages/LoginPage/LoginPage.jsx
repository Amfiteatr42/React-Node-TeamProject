
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { Login } from 'redux/auth/operations';
import {
  AuthBox,
  AuthButton,
  AuthForm,
  AuthInput,
  AuthTitleh2,
  AuthTitleh3,
  Box,
} from '../../stylesheets/Auth.styled';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const hendeLSumdit = (e) => {
    e.preventDefault()
    dispatch(Login({email,password}))
    setEmail('')
    setPassword('')
  };

  return (
    <AuthBox>
      <AuthTitleh2>Login</AuthTitleh2>
      <AuthForm onSubmit={hendeLSumdit}>
        <Box>
        <AuthInput
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <AuthInput
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        </Box>
          <AuthButton name="sumdit">Login</AuthButton>
      </AuthForm>
      <AuthTitleh3>
        Don't have an account? <NavLink to="/register">Register</NavLink>
      </AuthTitleh3>
    </AuthBox>
  );
};

export default LoginPage;
