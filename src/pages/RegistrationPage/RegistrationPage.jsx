import {
  AuthBox,
  AuthButton,
  AuthForm,
  AuthInput,
  AuthTitleh2,
  AuthTitleh3,
  Box,
} from 'stylesheets/Auth.styled';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Register } from 'redux/auth/operations';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [next, setNext] = useState(false);
  const dispatch = useDispatch();
  const hendeLSumdit = e => {
    e.preventDefault();
    dispatch(Register({}));
  };
  const hendeLNext = e => {
    if (password === '') {
      return;
    }
    if (password === password2) {
      const open = e.target.value;
      if (open === 'true') {
        setNext(false);
      } else {
        setNext(true);
      }
    }
  };
  return (
    <AuthBox>
      <AuthTitleh2>Register</AuthTitleh2>
      {next ? (
        <AuthForm onSubmit={hendeLSumdit}>
          <Box>
          <AuthInput
            name="name"
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <AuthInput
            name="city"
            type="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <AuthInput
            name="Mobile phone"
            type="phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          </Box>
          <AuthButton name="sumdit">sumdit</AuthButton>
        </AuthForm>
      ) : (
        <AuthForm>
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
          <AuthInput
            name="Confirm Password"
            type="password"
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
          </Box>
        </AuthForm>
      )}
      <AuthButton name="button" value={next} onClick={hendeLNext}>
        {next ? 'Back' : 'Next'}
      </AuthButton>
      <AuthTitleh3>
        Don't have an account? <NavLink to="/login">login</NavLink>
      </AuthTitleh3>
    </AuthBox>
  );
};

export default RegistrationPage;
