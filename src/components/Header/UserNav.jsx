import { NavLink } from 'react-router-dom';
import { UserNavBox, UserNavContainer, SvgIcon, Text } from './UserNav.styled.jsx';
import sprite from '../../assets/images/header/sprite.svg';
import setIsMobMenuOpen from './Navigation';

export default function UserNav() {

    return (
        <UserNavBox>
            <NavLink to="user" onClick={() => setIsMobMenuOpen(false)}>
            <UserNavContainer>
                <SvgIcon height="24px" width="24px">
                    <use href={`${sprite}#icon-account-3`}></use>
                </SvgIcon>
                <Text>Account</Text>
            </UserNavContainer>
            </NavLink>
        </UserNavBox>
        
          
    )
}