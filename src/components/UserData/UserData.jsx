import { InputFile } from 'components/ModalAddsPet/ModalAddsPet.styled';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';
// import { useEffect } from 'react';
// import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  // avatarUsers,
  updateAvatar,
  // updateUserInfo,
} from 'redux/auth/operations';
//import { getAuthAvatar, getAuthUser } from 'redux/auth/selectors';
import { Content, Text, Icon, Button, Div, Svg } from './UserData.styled';
export const UserData = ({ user }) => {
  //  const [photo, setPhoto] = useState('');
  //  const userPhoto = useSelector(getAuthAvatar)
  const dispatch = useDispatch();
  const handleChange = e => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    dispatch(updateAvatar(formData));
  };

  //    const handleChanges = e => {
  //    const formData = new FormData();
  //    formData.append('avatar', e.target.files[0]);
  //    dispatch(avatarUsers(formData));
  //  };
  //
  //

  return (
    <>
      {' '}
      <Div>
        <Content>
          <Icon />
        </Content>
        <Button>
          <InputFile
            onChange={handleChange}
            type="file"
            name="avatar"
            accept=".png, .jpg, .jpeg"
          />
          <Svg />
          <Text>Edit photo</Text>
        </Button>
        <UserDataItem />
      </Div>
    </>
  );
};
