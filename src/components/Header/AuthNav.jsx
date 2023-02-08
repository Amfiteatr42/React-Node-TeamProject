import { NavLink } from 'react-router-dom';
import {
  LoginContainer,
  RegContainer,
  Text,
  RegText,
  AuthList,
  LoginItem,
  RegItem,
  LoginContainerNotActive,
} from './AuthNav.styled.jsx';

export default function AuthNav({
  setIsMobMenuOpen,
  setIsRegActive,
  isRegActive,
}) {
  return (
    <AuthList>
      <LoginItem>
        <NavLink
          to="login"
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '',
            backgroundColor: isActive ? '#F59256' : '#F59256',
            border: isActive ? '2px' : '',
            borderColor: isActive ? '#F59256' : '#000000',
            
          })}
          onClick={() => {
            setIsMobMenuOpen(false);
            setIsRegActive(false);
          }}
        >
          {isRegActive === false ? (
            <LoginContainer className="log-btn">
              <Text>Login</Text>
            </LoginContainer>
          ) : (
            <LoginContainerNotActive>
              <Text>Login</Text>
            </LoginContainerNotActive>
          )}
        </NavLink>
      </LoginItem>
      <RegItem>
        <NavLink
          to="register"
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#000000',
            backgroundColor: isActive ? '#F59256' : '#ffffff',
          })}
          onClick={() => {
            setIsMobMenuOpen(false);
            setIsRegActive(true);
          }}
        >
          <RegContainer className="reg-btn">
            <RegText>Registration</RegText>
          </RegContainer>
        </NavLink>
      </RegItem>
    </AuthList>
  );
}
