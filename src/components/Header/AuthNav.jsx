import { NavLink } from 'react-router-dom';
import { LoginContainer, RegContainer, Text, RegText, AuthList, LoginItem, RegItem } from './AuthNav.styled.jsx';

export default function AuthNav({ setIsMobMenuOpen }) {

    return (
        <AuthList>
            <LoginItem>
                <NavLink to="login" onClick={() => setIsMobMenuOpen(false)}>
                <LoginContainer>   
                    <Text>Login</Text>
                </LoginContainer>
                </NavLink>
            </LoginItem>
            <RegItem>
                <NavLink to="register" onClick={() => setIsMobMenuOpen(false)}>
                <RegContainer>   
                    <RegText>Registration</RegText>
                </RegContainer>
                </NavLink>
            </RegItem>
            
        </AuthList>
        
    )
}