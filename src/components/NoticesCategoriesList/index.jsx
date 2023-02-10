import NoticeItem from 'components/NoticeCategoriesItem';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { noticesOperations, noticesSelectors } from '../../redux/notices';
import s from './index.module.css';
import { RotatingLines } from 'react-loader-spinner';
import { getAuthToken, getUserFavorite } from 'redux/auth/selectors';
import { fetchAllNotices } from 'redux/notices/notice-operation';

export default function NoticesCategoriesList() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [noticesData, setNoticesData] = useState([]);
  const category = useSelector(noticesSelectors.getNoticesCategories);
  const userNotices = useSelector(noticesSelectors.getUserNotices);
  const isLoading = useSelector(noticesSelectors.getIsLoadingNotices);
  const allNotices = useSelector(noticesSelectors.getAllNotices);

  const inFavorite = useSelector(getUserFavorite);
  const favorite = inFavorite.map(favId =>
    allNotices.find(notice => notice._id === favId)
  );

  const token = useSelector(getAuthToken);
  const pathFrom = pathname.split('/')[2];

  const resetNoticesData = async pathFrom => {
    if (pathFrom === 'sell') {
      dispatch(noticesOperations.getNoticesCategories({ category: '1' }));
    }
    if (pathFrom === 'lost-found') {
      dispatch(noticesOperations.getNoticesCategories({ category: '2' }));
    }
    if (pathFrom === 'for-free') {
      dispatch(noticesOperations.getNoticesCategories({ category: '3' }));
    }
    if (pathFrom === 'favorite') {
      setNoticesData(favorite);
    }
    if (pathFrom === 'own') {
      dispatch(noticesOperations.getUserNotices({ token }));
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
