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
import { format } from 'date-fns';

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

  const udateInput = name => ()=> {
   const valid = name === 'birthday' ? format(new Date(value), 'dd.MM.yyyy') : value;
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
