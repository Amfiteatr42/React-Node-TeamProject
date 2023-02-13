import EllipsisText from 'react-ellipsis-text';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAuthIsLoggedIn,
  getUserFavorite,
  getAuthUser,
} from 'redux/auth/selectors';
import { addToFavorite, deleteFromFavorite } from 'redux/auth/operations';
import ModalNotice from '../NoticeItemModal';
import s from './modalItem.module.css';
import { toast } from 'react-toastify';
import modalImage from '../../images/no-image-found.png';
import { ReactComponent as HeartBtnM } from '../../images/svg/heartBtnM.svg';
import getPetAge from './getPetAge';
import { noticesOperations } from 'redux/notices';
import { Modal } from 'components/Modal/Modal';

const NOTICE_ITEM_KEYS = [
  {
    label: 'Breed:',
    key: 'breed',
  },
  {
    label: 'Place:',
    key: 'location',
  },
  {
    label: 'Age',
    key: 'age',
  },
];

export default function NoticeItem({ petData, removeFromFavArray }) {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  const favoriteArr = useSelector(getUserFavorite);
  const userData = useSelector(getAuthUser);

  let inFavorites = '';

  inFavorites = favoriteArr.some(el => el === petData._id);

  const petAge = getPetAge(petData.dateofbirth);

  const dispatch = useDispatch();

  const [modalShow, setModalShow] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    setFavorite(inFavorites);
  }, [inFavorites]);

  const handleModalToggle = () => {
    setModalShow(!modalShow);
  };

  const handleFavoriteToggle = () => {
    if (!isLoggedIn) return toast.info('You must be logged in');
    if (favorite === true) {
      try {
        dispatch(deleteFromFavorite(petData._id));
        removeFromFavArray(petData._id);
        return toast.success('remove from favorite');
      } catch (e) {
        toast.error(e.message);
      }
    } else {
      try {
        dispatch(addToFavorite(petData._id));
        return toast.success('add tofavorite');
      } catch (e) {
        toast.error(e.message);
      }
    }
  };
  const categoryItem = () => {
    if (petData.categoryId === 1) {
      return 'Sell';
    }
    if (petData.categoryId === 2) {
      return 'Lost/Found';
    }
    if (petData.categoryId === 3) {
      return 'In good hands';
    }
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.imgWrapper}>
          <img
            src={petData.imgURL.url || modalImage}
            alt={petData.name}
            height="100%"
            style={{ height: 288, objectFit: 'cover' }}
          />
          <div className={s.categoryLabel}>{categoryItem()}</div>
        </div>
        <div className={s.infoWrapper}>
          <EllipsisText
            text={petData.title}
            length={15}
            className={s.title}
          ></EllipsisText>
          <ul>
            {NOTICE_ITEM_KEYS.map(({ label, key, category }) => {
              if (category && category !== petData.categoryId)
                return `Price:${petData.price}`;
              return (
                <li key={key} className={s.infoList}>
                  <span className={s.label}>{label}</span>
                  <EllipsisText
                    text={petData[key] || petAge}
                    length={20}
                    className={s.lebalText}
                  ></EllipsisText>
                </li>
              );
            })}
            {petData.categoryId === 1 && (
              <li className={s.infoList}>
                <span className={s.Price}>Price:</span>
                <EllipsisText
                  text={petData.price}
                  length={20}
                  className={s.lebalText}
                ></EllipsisText>
              </li>
            )}
          </ul>
        </div>
        <div className={s.learnMoreBtnCont}>
          {userData.email === petData.owner.email && (
            <button
              type="button"
              className={s.deleteBtn}
              onClick={() => {
                dispatch(noticesOperations.deleteUserNotices(petData._id));
              }}
            >
              Delete
            </button>
          )}
          <button
            type="button"
            className={s.learnMoreBtn}
            onClick={handleModalToggle}
          >
            Learn more
          </button>
        </div>
        <button
          type="button"
          className={s.heartBtn}
          onClick={handleFavoriteToggle}
        >
          {favorite ? (
            <HeartBtnM className={s.heartItemBtnActive} />
          ) : (
            <HeartBtnM className={s.heartItemBtn} />
          )}
        </button>
      </div>
      {modalShow && (
        <Modal onCloseModal={() => setModalShow(false)} learnMoreModal>
          <ModalNotice
            petData={petData}
            handleFavoriteToggle={handleFavoriteToggle}
            favorite={favorite}
          />
        </Modal>
      )}
    </>
  );
}
