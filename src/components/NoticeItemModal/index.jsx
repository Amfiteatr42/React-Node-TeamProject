import { useState } from 'react';
import s from './modalNotice.module.css';
import style from './modalNotice.module.css';
import modalImage from '../../images/no-image-found.png';
import { ReactComponent as HeartBtnM } from '../../images/svg/heartBtnM.svg';
import { Modal } from 'components/Modal/Modal';

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
    ],
  },
  {
    label: 'Price:',
    key: 'price',
    categoryId: 1,
  },
];

export default function ModalNotice({
  petData,
  handleFavoriteToggle,
  favorite,
}) {
  const [contactModalShow, setContactModalShow] = useState(false);

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
          </div>
          <div className={s.info}>
            <h3 className={s.title}>{petData.title}</h3>
            <ul>
              {PET_MODAL_KEYS.map(({ label, key, categoryId, values }) => {
                if (categoryId && categoryId !== petData.categoryId)
                  return null;
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
            <div className={s.infoList}>
              <span className={s.label}>Phone:</span>
              <a href={`tel:+${petData.owner.phone}`} className={s.leballink}>
                {petData.owner.phone}
              </a>
            </div>

            <div className={s.infoList}>
              <span className={s.label}>Email:</span>
              <a href={`mailto:${petData.owner.email}`} className={s.leballink}>
                {petData.owner.email}
              </a>
            </div>
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
          <button
            type="button"
            className={s.deleteBtn}
            onClick={handleFavoriteToggle}
          >
            {favorite ? (
              <>
                Remove
                <HeartBtnM className={s.heartItemBtnActive} />
              </>
            ) : (
              <>
                Add to
                <HeartBtnM className={s.heartItemBtn} />
              </>
            )}
          </button>
        </div>
      </div>
      {contactModalShow && (
        <Modal onCloseModal={handleModalToggle}>
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
        </Modal>
      )}
    </>
  );
}
