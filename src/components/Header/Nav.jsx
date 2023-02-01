import { NavLink } from 'react-router-dom';
import { NavList, NavItem } from './Nav.styled.jsx';

export default function Nav() {

    return (
        <NavList>
            <NavItem>
                <NavLink to="news">
                    <span>News</span>               
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="notices/sell">
                    <span>Find pet</span>                
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="friends">
                    <span>Our friends</span>                
                </NavLink>
            </NavItem>
        </NavList>
        
    )
}