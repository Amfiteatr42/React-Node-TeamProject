import Nav from './Nav';
import AuthNav from './AuthNav';
import UserNav from './UserNav';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuthIsLoggedIn } from '../../redux/auth/selectors';
import sprite from '../../assets/images/header/sprite.svg';
import {
  NavigationList,
  NavigationItem,
  NavigationItemUser,
  UserNavBox,
  BurgerBtnItem,
  BurgerBtn,
  SvgBurger,
  SvgClose,
  CloseBtn,
  MobMenuContainer,
  UserAuthNavBox,
  MobMenuBox,
} from './Navigation.styled.jsx';

export default function Navigation() {
  const [isMobMenuOpen, setIsMobMenuOpen] = useState(false);
  const isLoggedIn = useSelector(getAuthIsLoggedIn);

  return (
    <NavigationList>
      <NavigationItem>
        <Nav setIsMobMenuOpen={setIsMobMenuOpen} />
      </NavigationItem>

      {isMobMenuOpen === false ? (
        <NavigationItemUser>
          {isLoggedIn === true ? (
            <UserNavBox>
              <UserNav setIsMobMenuOpen={setIsMobMenuOpen} />
            </UserNavBox>
          ) : (
            <UserNavBox>
              <AuthNav />
            </UserNavBox>
          )}
        </NavigationItemUser>
      ) : (
        <></>
      )}

      <BurgerBtnItem>
        {isMobMenuOpen === false ? (
          <BurgerBtn type="button" onClick={() => setIsMobMenuOpen(true)}>
            <SvgBurger>
              <use href={`${sprite}#icon-burger2`}></use>
            </SvgBurger>
          </BurgerBtn>
        ) : (
          <CloseBtn type="button" onClick={() => setIsMobMenuOpen(false)}>
            <SvgClose>
              <use href={`${sprite}#icon-close3`}></use>
            </SvgClose>
          </CloseBtn>
        )}
      </BurgerBtnItem>

      {isMobMenuOpen === true ? (
        <MobMenuBox>
          <MobMenuContainer>
            <UserAuthNavBox>
              {isLoggedIn === true ? <UserNav setIsMobMenuOpen={setIsMobMenuOpen} /> : <AuthNav setIsMobMenuOpen={setIsMobMenuOpen} />}
            </UserAuthNavBox>

            <Nav setIsMobMenuOpen={setIsMobMenuOpen} />
          </MobMenuContainer>
        </MobMenuBox>
      ) : (
        <></>
      )}
    </NavigationList>
  );
}
