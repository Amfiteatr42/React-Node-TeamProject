import Button from 'components/Button';
import s from './index.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthIsLoggedIn } from 'redux/auth/selectors';

const buttonText = [
  { id: 'sell', text: 'sell' },
  { id: 'lost-found', text: 'lost/found' },
  { id: 'for-free', text: 'In good hands' },
];
const authButtonText = [
  { id: 'favorite', text: 'Favorite ads' },
  { id: 'own', text: 'My ads' },
];

export default function NoticesCategoriesNav() {
  const isLoggedIn = useSelector(getAuthIsLoggedIn);
  const location = useLocation();
  const currentLocation = location.pathname.split('/')[2];
  let btnList = [];

  if (isLoggedIn) {
    btnList = [...buttonText, ...authButtonText].map(button => {
      return {
        ...button,
        active: currentLocation === button.id ? true : false,
      };
    });
  } else {
    btnList = buttonText.map(button => {
      return {
        ...button,
        active: currentLocation === button.id ? true : false,
      };
    });
  }

  return (
    <div className={s.wrapper}>
      {btnList.map(({ id, text, active }) => (
        <Link key={id} to={`/notices/${id}`} className={s.btnLink}>
          <Button text={text} smole active={active} />
        </Link>
      ))}
    </div>
  );
}
