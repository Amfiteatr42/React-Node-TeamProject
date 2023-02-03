import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import {
  Label,
  Input,
  Button,
  Svg,
  Item,
  SvgUpdate,
} from './UserDataItem.styled';
import { useOutClick } from '../../hooks/outClick';

export const User = ({ label, name, user, active, setActive }) => {
  const [value, setValue] = useState();
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const handelClick = () => {
    setValue(user);
    setActive('');
  };

  useOutClick(wrapperRef, handelClick);

  const handleDataFormat = date => {
    if (!date?.length) return;
    const d = date?.split('-');
    return ([d[0], d[1], d[2]] = [d[2], d[1], d[0]].join('.')); // DD.MM.YYYY
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'userName':
        setValue(value);
        break;
      case 'email':
        setValue(value);
        break;
      case 'birthday':
        setValue(value);
        break;
      case 'phone':
        setValue(value);
        break;
      case 'city':
        setValue(value);
        break;

      default:
        break;
    }
  };

  const onUdateInput = name => () => {
    const edits = name === 'birthday' ? handleDataFormat(value) : value;
    setActive('');
    if (!edits || edits === user) return;
    dispatch(updateUserInfo({ [name]: edits || user }));
  };

  const activeBtn = name => () => setActive(name);

  return (
    <>
      <Item ref={active === name ? wrapperRef : null}>
        <Label htmlFor={name}>{label}</Label>
        <Input
          active={active === name}
          disabled={active !== name}
          type={'text'}
          name={name}
          value={value || (name === 'birthday' ? '00.00.0000' : user) || ''}
          onChange={handleChange}
        />
        <Button>
          {active === name ? (
            <SvgUpdate onClick={onUdateInput(name)} />
          ) : (
            <Svg onClick={activeBtn(name)} active={active} />
          )}
        </Button>
      </Item>
    </>
  );
};
/*export const updateUserInfo = createAsyncThunk('auth/update', async (info, { rejectWithValue }) => {
    try {
        const res = await axios.patch('api/users/update', info);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.messsage)
    }*/
