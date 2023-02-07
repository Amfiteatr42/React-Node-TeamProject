import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuthIsLoggedIn } from 'redux/auth/selectors';

export function PrivateRoute({ element, redirectPath = '/login' }) {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    element
  ) : (
    <Navigate to={redirectPath} replace state={{ from: location }} />
  );
}
