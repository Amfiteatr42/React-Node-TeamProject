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
        name={'userName'}
        label={'Name:'}
        user={user.userName}
      />
      <User
        active={active}
        setActive={setActive}
        name={'email'}
        label={'Email:'}
        user={user.email}
      />
      <User
        active={active}
        setActive={setActive}
        name={'birthday'}
        label={'Birthday:'}
        user={user.birthday}
      />

      <User
        active={active}
        setActive={setActive}
        name={'phone'}
        label={'Phone:'}
        user={user.phone}
      />
      <User
        active={active}
        setActive={setActive}
        name={'city'}
        label={'City:'}
        user={user.city}
      />
    </Package>
  );
};
