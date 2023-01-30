import HomePage from 'pages/HomePage/HomePage';
import LoginPage from 'pages/LoginPage/LoginPage';
import NewsPage from 'pages/NewsPage/NewsPage';
// import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import UserPage from 'pages/UserPage/UserPage';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { SharedLayout } from './SharedLayout/SharedLayout';

import NoticesCategoriesList from './NoticesCategoriesList';

import { lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));

export function App() {
  return (
    <div>
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
          <Route path="notices" element={<NoticesPage />}>
            <Route path="sell" element={<NoticesCategoriesList />} />
            <Route path="lost-found" element={<NoticesCategoriesList />} />
            <Route path="for-free" element={<NoticesCategoriesList />} />
            <Route path="favorite" element={<NoticesCategoriesList />} />
            <Route path="own" element={<NoticesCategoriesList />} />
          </Route>
          <Route
            path="user"
            element={<PrivateRoute element={<UserPage />} />}
          />
        </Route>
      </Routes>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
