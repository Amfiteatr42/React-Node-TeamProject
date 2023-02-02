import Button from 'components/Button';
import React, { useEffect, useState } from 'react';
import s from './index.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthIsLoggedIn } from 'redux/auth/selectors';

const buttonText = [
  { id: 'sell', text: 'sell', active: false },
  { id: 'lost-found', text: 'lost/found', active: false },
  { id: 'for-free', text: 'In good hands', active: false },
];
const authButtonText = [
  { id: 'favorite', text: 'Favorite ads', active: false },
  { id: 'own', text: 'My ads', active: false },
];

export default function NoticesCategoriesNav() {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  // const isLoading = false;
  const [btnList, setBtnList] = useState(
    isLoggedIn ? [...buttonText, ...authButtonText] : buttonText
  );
  const location = useLocation();

  useEffect(
    () => {
      const locationArr = location.pathname.split('/');
      let newBtnList;
      if (isLoggedIn) {
        newBtnList = [...buttonText, ...authButtonText].map(item => {
          return { ...item, active: locationArr[2] === item.id ? true : false };
        });
      } else {
        newBtnList = btnList.map(item => {
          return { ...item, active: locationArr[2] === item.id ? true : false };
        });
      }
      setBtnList(newBtnList);
    }, // eslint-disable-next-line
    [location, isLoggedIn]
  );

  return (
    <div className={s.wrapper}>
      {btnList.map(({ id, text, smole, active }) => (
        <Link
          key={id}
          to={`/notices/${id}`}
          className={s.btnLink}
          style={{ color: 'inherit' }}
        >
          <Button text={text} smole={true} active={active} />
        </Link>
      ))}
    </div>
  );
}
