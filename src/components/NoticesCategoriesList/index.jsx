// import NoticeItem from 'components/NoticeCategoriesItem';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations, noticesSelectors } from '../../redux/notices';
// import { authSelectors } from './../../redux/auth';
import s from './index.module.css';
import { RotatingLines } from 'react-loader-spinner';

export default function NoticesCategoriesList() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [noticesData, setNoticesData] = useState([]);
  const [noticesSlice, setNoticesSlice] = useState([]);
  const category = useSelector(noticesSelectors.getNoticesCategories);
  const userNotices = useSelector(noticesSelectors.getUserNotices);
  //   const favorite = useSelector(authSelectors.getUserFavorite);
  const favorite = false;
  const isLoading = useSelector(noticesSelectors.getIsLoadingNotices);
  const pathnameArr = pathname.split('/');

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjc0OTMxMTc4fQ.I9kaulBObpq4MOHq4raD3iTwanceICRkB5S9Zs2XOvM';

  useEffect(() => {
    resetNoticesData(pathnameArr);
  }, [pathname]);

  useEffect(() => {
    setNoticesData(category);
  }, [category]);

  useEffect(() => {
    if (pathnameArr[2] === 'favorite') {
      setNoticesData(favorite);
    }
  }, [favorite]);

  useEffect(() => {
    if (pathnameArr[2] === 'own') {
      setNoticesData(userNotices);
    }
  }, [userNotices]);

  const resetNoticesData = async pathnameArr => {
    if (pathnameArr[2] === 'sell') {
      dispatch(noticesOperations.getNoticesCategories({ categoryID: '1' }));
    }
    if (pathnameArr[2] === 'lost-found') {
      dispatch(
        noticesOperations.getNoticesCategories({ category: 'lost/found' })
      );
    }
    if (pathnameArr[2] === 'for-free') {
      dispatch(
        noticesOperations.getNoticesCategories({ category: 'in_good_hands' })
      );
    }
    if (pathnameArr[2] === 'favorite') {
      setNoticesData(favorite);
    }
    if (pathnameArr[2] === 'own') {
      dispatch(noticesOperations.getUserNotices({ token }));
    }
  };
  return (
    <>
      {isLoading ? (
        <div
          style={{
            marginTop: '50px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <RotatingLines
            strokeColor="#F59256"
            strokeWidth="5"
            animationDuration="0.75"
            width="150"
            visible={true}
          />
        </div>
      ) : (
        <div className={s.NoticeList}>
          <p className={s.NoticeText}>Not notices</p>
        </div>
      )}
    </>
  );
}
