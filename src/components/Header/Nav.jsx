import { NavLink } from 'react-router-dom';
import { NavList, NavItem } from './Nav.styled.jsx';
import setIsMobMenuOpen from './Navigation';
 
export default function Nav() {

    return (
        <NavList>
            <NavItem>
                <NavLink to="news" onClick={() => setIsMobMenuOpen(false)}>
                    <span>News</span>               
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="notices/sell" onClick={() => setIsMobMenuOpen(false)}>
                    <span>Find pet</span>                
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="friends" onClick={() => setIsMobMenuOpen(false)}>
                    <span>Our friends</span>                
                </NavLink>
            </NavItem>
        </NavList>
        
    )
}