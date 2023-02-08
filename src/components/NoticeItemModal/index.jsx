import { useDispatch } from 'react-redux';
import { useState } from 'react';
import s from './modalNotice.module.css';
import style from './modalNotice.module.css';
import modalImage from '../../images/no-image-found.png';
import ContactsModal from './contactsModal';
import { ReactComponent as HeartBtnM } from '../../images/svg/heartBtnM.svg';
import { noticesOperations } from 'redux/notices';
import { useLocation } from 'react-router-dom';

const PET_MODAL_KEYS = [
  {
    label: 'Name:',
    key: 'petname',
  },
  {
    label: 'Birthday:',
    key: 'dateofbirth',
  },
  {
    label: 'Breed:',
    key: 'breed',
  },
  {
    label: 'Place:',
    key: 'location',
  },
  {
    label: 'The sex:',
    key: 'sex',
  },
  {
    key: 'owner',
    values: [
      {
        label: 'Owner:',
        field: 'userName',
      },
      {
        label: 'Phone:',
        field: 'phone',
      },
      {
        label: 'Email:',
        field: 'email',
      },
    ],
  },
  {
    label: 'Price:',
    key: 'price',
    category: 'sell',
  },
];

export default function ModalNotice({
  petData,
  handleFavoriteToggle,
  favorite,
}) {
  const [contactModalShow, setContactModalShow] = useState(false);

  const { pathname } = useLocation();
  const pathnameArr = pathname.split('/');

  const dispatch = useDispatch();

  const handleModalToggle = () => {
    setContactModalShow(!contactModalShow);
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
        <div className={s.infoWrapper}>
          <div className={s.imgWrapper}>
            <img
              src={petData.imgURL.url || modalImage}
              alt={petData.name}
              height="100%"
              style={{ objectFit: 'cover' }}
            />
            <div className={s.categoryLabel}>{categoryItem()}</div>
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
          <div className={s.info}>
            <h3 className={s.title}>{petData.title}</h3>
            <ul>
              {PET_MODAL_KEYS.map(({ label, key, category, values }) => {
                if (category && category !== petData.category) return null;
                if (values) {
                  return values.map(({ field, label }) => (
                    <li key={label} className={s.infoList}>
                      <span className={s.label}>{label}</span>
                      <span className={s.lebalText}>
                        {petData[key] && petData[key][field]}
                      </span>
                    </li>
                  ));
                }
                return (
                  <li key={key} className={s.infoList}>
                    <span className={s.label}>{label}</span>
                    <span className={s.lebalText}>{petData[key]}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={s.commentsWrapper}>
          <h3 className={s.comments}>Comments: </h3>
          <p className={s.commentsText}>{petData.comments}</p>
        </div>
        <div className={s.buttons}>
          <button
            type="button"
            className={s.contactBtn}
            onClick={handleModalToggle}
          >
            Contact
          </button>
          {pathnameArr[2] === 'own' && (
            <button
              type="button"
              className={s.deleteBtn}
              onClick={() => {
                dispatch(noticesOperations.deleteUserNotices(petData._id));
              }}
            >
              delete
            </button>
          )}
        </div>
      </div>
      {contactModalShow && (
        <ContactsModal onClose={handleModalToggle}>
          <div className={style.modalButtons}>
            <a
              href={`tel:+${petData.owner.phone}`}
              className={s.modalContactBtn}
            >
              to call
            </a>
            <a
              href={`mailto:${petData.owner.email}`}
              className={s.modalContactBtn}
            >
              send email
            </a>
          </div>
        </ContactsModal>
      )}
    </>
  );
}
