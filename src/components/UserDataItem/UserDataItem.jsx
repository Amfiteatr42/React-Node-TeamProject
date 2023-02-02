import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuthUser } from 'redux/auth/selectors';
import { User } from './User';
import { Package } from './UserDataItem.styled';
export const UserDataItem = () => {
  const [active, setActive] = useState('');
  const user = useSelector(getAuthUser);
  return (
    <Package>
      <User
        active={active}
        setActive={setActive}
        name={'name'}
        label={'Name:'}
        user={user.userName || "Anna"}
      />
      <User
        active={active}
        setActive={setActive}
        name={'email'}
        label={'Email:'}
        user={user.email ||'sv@ukr.net'}
      />
      <User
        active={active}
        setActive={setActive}
        name={'birthday'}
        label={'Birthday:'}
        user={'13.10.2002'}
      />

      <User
        active={active}
        setActive={setActive}
        name={'phone'}
        label={'Phone:'}
        user={user.phone ||'+380000000000'}
      />
      <User
        active={active}
        setActive={setActive}
        name={'city'}
        label={'City:'}
        user={user.city || "Kiev"}
      />
    </Package>
  );
};
