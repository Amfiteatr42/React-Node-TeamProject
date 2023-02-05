import { NavLink } from 'react-router-dom';
import { NavList, NavItem, MenuItem } from './Nav.styled.jsx';

export default function Nav({ setIsMobMenuOpen, setIsRegActive, isRegActive }) {
  return (
    <NavList>
      <NavItem>
        <NavLink to="news"
          style={({ isActive }) => ({
              color: isActive ? '#F59256' : '#000000',
              textDecorationLine: isActive ? 'underline' : 'none',
              fontWeight: isActive ? '500' : '',
            })}
          
          onClick={() => {
            setIsMobMenuOpen(false);
            setIsRegActive(false);
          }}>
          <MenuItem>News</MenuItem>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="notices/sell"
          style={({ isActive }) => ({
              color: isActive ? '#F59256' : '#000000',
              textDecorationLine: isActive ? 'underline' : 'none',
              fontWeight: isActive ? '500' : '',
            })}
          onClick={() => {
            setIsMobMenuOpen(false);
            setIsRegActive(false);
          }}>
          <MenuItem>Find pet</MenuItem>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="friends"
          style={({ isActive }) => ({
              color: isActive ? '#F59256' : '#000000',
              textDecorationLine: isActive ? 'underline' : 'none',
              fontWeight: isActive ? '500' : '',
            })}
          onClick={() => {
            setIsMobMenuOpen(false);
            setIsRegActive(false);
          }}>
          <MenuItem>Our friends</MenuItem>
        </NavLink>  
      </NavItem>
    </NavList>
  );
}
