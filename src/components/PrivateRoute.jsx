// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { selectUserStatus } from 'redux/authorization/auth-selectors';

export function PrivateRoute({ element, redirectPath = '/' }) {
  // const isLoggedIn = useSelector(selectUserStatus);
  const isLoggedIn = true;
  return isLoggedIn ? element : <Navigate to={redirectPath} replace />;
}
