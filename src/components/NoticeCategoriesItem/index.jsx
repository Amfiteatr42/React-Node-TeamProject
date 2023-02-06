import EllipsisText from 'react-ellipsis-text';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthIsLoggedIn, getUserFavorite } from 'redux/auth/selectors';
import { addToFavorite, deleteFromFavorite } from 'redux/auth/operations';
import ModalNotice from '../NoticeItemModal';
import ModalPage from 'pages/ModalPage';
import s from './modalItem.module.css';
import { toast } from 'react-toastify';
import modalImage from '../../images/no-image-found.png';
import { ReactComponent as HeartBtnM } from '../../images/svg/heartBtnM.svg';
import { format } from 'date-fns';
import getPetAge from './getPetAge';

const NOTICE_ITEM_KEYS = [
  // {
  //   label: 'Name pet:',
  //   key: 'petname',
  // },
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
  {
    label: 'Price:',
    key: 'price',
    category: 'sell',
  },
];

export default function NoticeItem({ petData }) {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  const favoriteArr = useSelector(getUserFavorite);
  let inFavorites = false;
  // eslint-disable-next-line
  for (const el of favoriteArr) {
    inFavorites = favoriteArr.some(el => el === petData._id);
  }

  const petAge = petData.dateofbirth
    ? getPetAge(format(new Date(petData.dateofbirth), 'dd.MM.yyyy'))
    : `missing info`;

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
          </ul>
        </div>
        <div className={s.learnMoreBtnCont}>
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
        <ModalPage onClose={handleModalToggle}>
          <ModalNotice
            petData={petData}
            handleFavoriteToggle={handleFavoriteToggle}
            favorite={favorite}
          />
        </ModalPage>
      )}
    </>
  );
}
