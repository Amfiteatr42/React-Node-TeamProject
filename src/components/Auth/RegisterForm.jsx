import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthButton, AuthForm, AuthInput, AuthTitleh2, AuthTitleh3, Box } from "stylesheets/Auth.styled";


const RegisterForm = ({hendeLSumdit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    const [next, setNext] = useState(false);
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
    <>
       <AuthTitleh2>Register</AuthTitleh2>
      {next ? (
        <AuthForm onSubmit={hendeLSumdit}>
          <Box>
          <AuthInput
            name="name"
            type="name"
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
          
          <AuthInput
            name="city"
            type="city"
            placeholder="City, region"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <AuthInput
            name="Mobile phone"
            type="phone"
            value={phone}
            placeholder="Mobile phone"
            onChange={e => setPhone(e.target.value)}
          />
          </Box>
          <AuthButton style={{marginBottom: "16px"}} name="sumdit">sumdit</AuthButton>
        </AuthForm>
      ) : (
        <AuthForm>
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
          <AuthInput
            name="Confirm Password"
            type="password"
            placeholder="Confirm Password"
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