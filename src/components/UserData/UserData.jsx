import { InputFile } from 'components/ModalAddsPet/ModalAddsPet.styled';
import { UserDataItem } from 'components/UserDataItem/UserDataItem';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';
import { getAuthUser } from 'redux/auth/selectors';
import { Content, Text, Icon, Button, Div, Svg, Img } from './UserData.styled';
export const UserData = () => {
  const userPhoto = useSelector(getAuthUser);
  const dispatch = useDispatch();
  const handleChange = e => {
    const formData = new FormData();
    formData.append('avatar', e.target.files[0]);
    dispatch(updateAvatar(formData));
  };

  return (
    <Div>
      {userPhoto.avatarURL ? (
        <Img src={userPhoto.avatarURL.url} />
      ) : (
        <Content>
          <Icon />
        </Content>
      )}
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
  );
};
