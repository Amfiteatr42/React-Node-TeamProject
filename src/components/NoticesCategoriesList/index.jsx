import NoticeItem from 'components/NoticeCategoriesItem';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations, noticesSelectors } from '../../redux/notices';
import s from './index.module.css';
import { getAuthToken, getUserFavorite } from 'redux/auth/selectors';
import { fetchAllNotices } from 'redux/notices/notice-operation';
import { LoaderSpinner } from 'components/LoaderSpinner/LoaderSpinner';
import { deleteFromFavorite } from 'redux/auth/operations';

export default function NoticesCategoriesList() {
  const [noticesData, setNoticesData] = useState([]);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const category = useSelector(noticesSelectors.getNoticesCategories);
  const userNotices = useSelector(noticesSelectors.getUserNotices);
  const isLoading = useSelector(noticesSelectors.getIsLoadingNotices);
  const allNotices = useSelector(noticesSelectors.getAllNotices);
  const inFavorite = useSelector(getUserFavorite);
  const token = useSelector(getAuthToken);
  const pathFrom = pathname.split('/')[2];

  const favorite = [];
  if (allNotices.length && pathFrom === 'favorite') {
    let counter = 1;
    for (const favId of inFavorite) {
      const result = allNotices.find(notice => notice._id === favId);
      console.log('result', counter, ' === ', result);
      counter += 1;
      result ? favorite.push(result) : dispatch(deleteFromFavorite(favId));
    }
  }
  console.log('render');
  const resetNoticesData = async pathFrom => {
    switch (pathFrom) {
      case 'sell':
        dispatch(noticesOperations.getNoticesCategories({ category: '1' }));
        break;
      case 'lost-found':
        dispatch(noticesOperations.getNoticesCategories({ category: '2' }));
        break;
      case 'for-free':
        dispatch(noticesOperations.getNoticesCategories({ category: '3' }));
        break;
      case 'favorite':
        setNoticesData(favorite);
        break;
      case 'own':
        dispatch(noticesOperations.getUserNotices({ token }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    resetNoticesData(pathFrom);
    // eslint-disable-next-line
  }, [pathFrom]);

  useEffect(() => {
    setNoticesData(category);
  }, [category]);

  useEffect(() => {
    dispatch(fetchAllNotices());
  }, [dispatch]);

  useEffect(() => {
    if (pathFrom === 'own') {
      setNoticesData(userNotices);
    }
  }, [userNotices, pathFrom]);

  function removeFromFavArray(favId) {
    const updatedFav = favorite.filter(item => item._id !== favId);
    setNoticesData(updatedFav);
  }

  return (
    <>
      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <div className={s.NoticeList}>
          {noticesData.length ? (
            noticesData.map(item => (
              <NoticeItem
                key={item._id}
                petData={item}
                removeFromFavArray={removeFromFavArray}
              />
            ))
          ) : (
            <p className={s.NoticeText}>No notices</p>
          )}
        </div>
      )}
    </>
  );
}
