// import { Formik, Form } from 'formik';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AuthButton,
  AuthForm,
  AuthInput,
  AuthTitleh2,
  AuthTitleh3,
  Box,
} from 'stylesheets/Auth.styled';

const RegisterForm = ({ handleSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userpassword, setUserpassword] = useState('');
  const [userName, setName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const [next, setNext] = useState(false);
  const hendeLNext = e => {
    if (password === '') {
      return;
    }
    if (password === userpassword) {
      const open = e.target.value;
      if (open === 'true') {
        setNext(false);
      } else {
        setNext(true);
      }
    }
  };

  const data = { email, password, userName, city, phone };
  return (
    <>
      <AuthTitleh2>Register</AuthTitleh2>
      <div>
        <AuthForm onSubmit={e=>handleSubmit(e,data)}>
          {next ? (
            <>
              <Box>
                <AuthInput
                  name="name"
                  type="name"
                  required
                  value={userName}
                  placeholder="Name"
                  onChange={e => setName(e.target.value)}
                />

                <AuthInput
                  name="city"
                  type="city"
                  required
                  placeholder="City, region"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
                <AuthInput
                  style={{ marginBottom: '0px' }}
                  name="Mobile phone"
                  type="phone"
                  required
                  value={phone}
                  placeholder="Mobile phone"
                  onChange={e => setPhone(e.target.value)}
                />
              </Box>
              <AuthButton style={{ marginBottom: '16px' }} type="submit">
                submit
              </AuthButton>
            </>
          ) : (
            <>
              <Box>
                <AuthInput
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <AuthInput
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <AuthInput
                  style={{ marginBottom: '0px' }}
                  name="Confirm Password"
                  type="password"
                  required
                  placeholder="Confirm Password"
                  value={userpassword}
                  onChange={e => setUserpassword(e.target.value)}
                />
              </Box>
            </>
          )}
        </AuthForm>
      </div>
      <AuthButton name="button" value={next} onClick={hendeLNext}>
        {next ? 'Back' : 'Next'}
      </AuthButton>
      <AuthTitleh3>
        Don't have an account?
        <NavLink
          style={{ borderBottom: '1px solid', color: '#3091EB' }}
          to="/login"
        >
          login
        </NavLink>
      </AuthTitleh3>
    </>
  );
};

export default RegisterForm;
