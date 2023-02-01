import { NavLink } from 'react-router-dom';
import { LoginContainer, RegContainer, Text, RegText, AuthList, LoginItem, RegItem } from './AuthNav.styled.jsx';

export default function AuthNav() {

    return (
        <AuthList>
            <LoginItem>
                <NavLink to="login">
                <LoginContainer>   
                    <Text>Login</Text>
                </LoginContainer>
                </NavLink>
            </LoginItem>
            <RegItem>
                <NavLink to="register">
                <RegContainer>   
                    <RegText>Registration</RegText>
                </RegContainer>
                </NavLink>
            </RegItem>
            
        </AuthList>
        
    )
}