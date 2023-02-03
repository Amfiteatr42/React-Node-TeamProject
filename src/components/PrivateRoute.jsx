import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getAuthIsLoggedIn } from 'redux/auth/selectors';

export function PrivateRoute({ element, redirectPath = '/login' }) {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  return isLoggedIn ? element : <Navigate to={redirectPath} replace />;
}
