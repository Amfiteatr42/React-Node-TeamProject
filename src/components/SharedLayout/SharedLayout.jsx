import { Suspense } from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

export function SharedLayout() {
  // const isLoggedIn = useSelector(selectUserStatus);

  return (
    <>
      <header>blabla</header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
