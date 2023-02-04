import EllipsisText from 'react-ellipsis-text';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthIsLoggedIn, getUserFavorite } from 'redux/auth/selectors';
// import { noticesOperations } from 'redux/notices';
import { addToFavorite, deleteFromFavorite } from 'redux/auth/operations';
import ModalNotice from '../NoticeItemModal';
import ModalPage from 'pages/ModalPage';
import s from './modalItem.module.css';
import { toast } from 'react-toastify';
import modalImage from '../../images/no-image-found.png';
import { ReactComponent as HeartBtnM } from '../../images/svg/heartBtnM.svg';
// import getPetAge from './getPetAge';

const NOTICE_ITEM_KEYS = [
  {
    label: 'Name pet:',
    key: 'name',
  },
  {
    label: 'Breed:',
    key: 'breed',
  },
  //   {
  //     label: 'Place:',
  //     key: 'location',
  //   },
  {
    label: 'Date of birth',
    key: 'age',
  },
  {
    label: 'Price:',
    key: 'price',
    category: 'sell',
    // categoryId: '1',
  },
];

export default function NoticeItem({ petData }) {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  const userFavorite = useSelector(getUserFavorite);
  // const userFavorite = useSelector(getFavoriteNotices);
  const favoriteArr = userFavorite ? Object.values(userFavorite) : [];
  // console.log(favoriteArr);
  const inFavorites = favoriteArr.some(favor => favor === petData._id);
  // const inFavorites = false;
  // const isLoggedIn = false;

  //   const petAge = getPetAge();
  const petAge = petData.dateofbirth;

  // new Date(petData.dateOfBirth.split('.').reverse().join('.'))

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
    // const pet = petData._id;
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
            src={petData.image || modalImage}
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