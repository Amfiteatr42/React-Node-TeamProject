import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Logo from '../Header/Logo';
import Navigation from '../Header/Navigation';
import { HeaderContainer, HeaderList, HeaderItem } from './SharedLayout.styled.jsx';

export function SharedLayout() {

  return (
    <>
      { (
          <HeaderContainer>
            <HeaderList>
              <HeaderItem><Logo/></HeaderItem>
              <HeaderItem><Navigation/></HeaderItem>
            </HeaderList>   
          </HeaderContainer>
      )}
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
