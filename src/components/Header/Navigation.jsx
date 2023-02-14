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
  const [isRegActive, setIsRegActive] = useState(false);
  const isLoggedIn = useSelector(getAuthIsLoggedIn);

  return (
    <NavigationList>
      <NavigationItem>
        <Nav
          setIsMobMenuOpen={setIsMobMenuOpen}
          setIsRegActive={setIsRegActive}
          isRegActive={isRegActive}
        />
      </NavigationItem>

      {!isMobMenuOpen && (
        <NavigationItemUser>
          {isLoggedIn ? (
            <UserNavBox>
              <UserNav setIsMobMenuOpen={setIsMobMenuOpen} />
            </UserNavBox>
          ) : (
            <UserNavBox>
              <AuthNav
                setIsMobMenuOpen={setIsMobMenuOpen}
                setIsRegActive={setIsRegActive}
                isRegActive={isRegActive}
              />
            </UserNavBox>
          )}
        </NavigationItemUser>
      )}

      <BurgerBtnItem>
        {isMobMenuOpen ? (
          <CloseBtn type="button" onClick={() => setIsMobMenuOpen(false)}>
            <SvgClose>
              <use href={`${sprite}#icon-close3`}></use>
            </SvgClose>
          </CloseBtn>
        ) : (
          <BurgerBtn type="button" onClick={() => setIsMobMenuOpen(true)}>
            <SvgBurger>
              <use href={`${sprite}#icon-burger2`}></use>
            </SvgBurger>
          </BurgerBtn>
        )}
      </BurgerBtnItem>

      <MobMenuBox isMobMenuOpen={isMobMenuOpen}>
        <MobMenuContainer>
          <UserAuthNavBox>
            {isLoggedIn ? (
              <UserNav setIsMobMenuOpen={setIsMobMenuOpen} />
            ) : (
              <AuthNav
                setIsMobMenuOpen={setIsMobMenuOpen}
                setIsRegActive={setIsRegActive}
                isRegActive={isRegActive}
              />
            )}
          </UserAuthNavBox>

          <Nav
            setIsMobMenuOpen={setIsMobMenuOpen}
            setIsRegActive={setIsRegActive}
            isRegActive={isRegActive}
          />
        </MobMenuContainer>
      </MobMenuBox>
    </NavigationList>
  );
}
