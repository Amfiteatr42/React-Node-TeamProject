import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthIsLoggedIn } from 'redux/auth/selectors';

export function RestrictedRoute({ element, redirectPath = '/' }) {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectPath} replace /> : element;
}
