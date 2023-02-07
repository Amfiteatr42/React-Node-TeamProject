import NoticeItem from 'components/NoticeCategoriesItem';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations, noticesSelectors } from '../../redux/notices';
import s from './index.module.css';
import { RotatingLines } from 'react-loader-spinner';
import { getAuthToken, getUserFavorite } from 'redux/auth/selectors';
// import { getFavorite } from 'redux/auth/operations';

export default function NoticesCategoriesList() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [noticesData, setNoticesData] = useState([]);
  // const [Favorite, setFavorite] = useState([]);
  const category = useSelector(noticesSelectors.getNoticesCategories);
  const userNotices = useSelector(noticesSelectors.getUserNotices);
  const isLoading = useSelector(noticesSelectors.getIsLoadingNotices);
  // const allNotices = useSelector(noticesSelectors.getAllNotices);
  // console.log(allNotices);

  const inFavorite = useSelector(getUserFavorite);
  const favorite = inFavorite.map(i => category.find(elem => elem._id === i));

  const token = useSelector(getAuthToken);
  const pathnameArr = pathname.split('/');

  useEffect(() => {
    resetNoticesData(pathnameArr);
    // eslint-disable-next-line
  }, [pathname]);

  useEffect(() => {
    setNoticesData(category);
  }, [category]);

  // useEffect(() => {
  //   if (pathnameArr[2] === 'favorite') {
  //     setNoticesData(favorite);
  //   } // eslint-disable-next-line
  // }, [favorite]);

  useEffect(() => {
    if (pathnameArr[2] === 'own') {
      setNoticesData(userNotices);
    } // eslint-disable-next-line
  }, [userNotices]);

  const resetNoticesData = async pathnameArr => {
    if (pathnameArr[2] === 'sell') {
      dispatch(noticesOperations.getNoticesCategories({ category: '1' }));
    }
    if (pathnameArr[2] === 'lost-found') {
      dispatch(noticesOperations.getNoticesCategories({ category: '2' }));
    }
    if (pathnameArr[2] === 'for-free') {
      dispatch(noticesOperations.getNoticesCategories({ category: '3' }));
    }
    if (pathnameArr[2] === 'favorite') {
      // dispatch(getFavorite());
      setNoticesData(favorite);
    }
    if (pathnameArr[2] === 'own') {
      dispatch(noticesOperations.getUserNotices({ token }));
      // setNoticesData(userNotices);
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
          {noticesData.length ? (
            noticesData.map(item => (
              <NoticeItem key={item._id} petData={item} />
            ))
          ) : (
            <p className={s.NoticeText}>Not notices</p>
          )}
        </div>
      )}
    </>
  );
}
