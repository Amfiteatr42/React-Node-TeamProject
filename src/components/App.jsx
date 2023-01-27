import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import NewsPage from 'pages/NewsPage/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import UserPage from 'pages/UserPage/UserPage';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={<RestrictedRoute element={<RegistrationPage />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute element={<LoginPage />} />}
        />
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="news" element={<NewsPage />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} />
        <Route path="user" element={<PrivateRoute element={<UserPage />} />} />
      </Route>
    </Routes>
  );
}
