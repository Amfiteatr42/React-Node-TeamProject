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
import * as yup from 'yup';
import { parse } from 'date-fns';
export const User = ({ label, name, user, active, setActive }) => {
  const [value, setValue] = useState();
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();
  const handelClick = () => {
    setValue(user);
    setActive('');
  };

  useOutClick(wrapperRef, handelClick);

const validationSchema = yup.string({
  birthday: yup
    .date()
    .test('len', 'Must be exactly DD.MM.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (value, originalValue) {
      if (this.isType(value)) {
        return value;
      }
      const result = parse(originalValue, 'dd.MM.yyyy', new Date());
      return result;
    })
    .typeError('Please enter a valid date')
    .required()
    .min('1950-11-13', 'Date is too early')
    .max(new Date()),
});
 const handleDataFormat = date => {
    if (!date?.length) return;
    const d = date?.split('-');
    return ([d[0], d[1], d[2]] = [d[2].slice(0, 2), d[1], d[0]].join('.')); 
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

  const udateInput = (name) => ()=> {

    const valid = name === 'birthday' ? validationSchema.validate(value) : value;
    setActive('');

    dispatch(updateUserInfo({ [name]: valid || user }));
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
          value={value || (name === 'birthday' ? handleDataFormat(user) : user) || ''}
          onChange={handleChange}
        />
        <Button>
          {active === name ? (
            <SvgUpdate onClick={udateInput(name)} />
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
