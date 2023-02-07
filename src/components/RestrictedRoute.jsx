import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthIsLoggedIn } from 'redux/auth/selectors';

export function RestrictedRoute({ element, redirectPath = '/' }) {
  const location = useLocation();
  redirectPath = location.state?.from?.pathname || '/';
  const isLoggedIn = useSelector(getAuthIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectPath} replace /> : element;
}
