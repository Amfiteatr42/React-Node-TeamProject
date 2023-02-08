import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getAuthUser } from 'redux/auth/selectors';
import { User } from './User';
import { Package } from './UserDataItem.styled';

export const UserDataItem = () => {
  const [active, setActive] = useState('');
  const user = useSelector(getAuthUser);
  const handleDataFormat = date => {
    if (!date?.length) return;
    const d = date?.split('-');

    return ([d[0], d[1], d[2]] = [d[2].slice(0, 2), d[1], d[0]].join('.'));
  };

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
        user={handleDataFormat(user.birthday)}
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
