import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import {
  Label,
  Input,
  Button,
  Svg,
  Item,
  SvgUpdate,ErrorText
} from './UserDataItem.styled';
import { useOutClick } from '../../hooks/outClick';
import { format, parse } from 'date-fns';
import { useEffect } from 'react';
const emailValid =
  /^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/;
const cityValid =
  /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/;
const phoneValid = /^\+380[0-9]{9}$/;
const nameValid = /^[a-zA-Z, а-яА-Я]*$/g;
//const birthdayValid =/^\d{1, 2}\-\d{1, 2}\-\d{4}$/
export const User = ({ label, name, user, active, setActive }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [disable, setDisable] = useState(false);
  const wrapperRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(user);
  }, [user]);

  const handelClick = () => {
    setActive('');
  };

  useOutClick(wrapperRef, handelClick);
 

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    if (name === 'userName') {
      if (!value.match(nameValid)) {
        console.log(!value.match(nameValid))
        setDisable(true);
        setError('Name is not valid');
      } else if (error) {
        setError('');
        setDisable(false);
      }
      setValue(value);
    }

    if (name === 'email') {
      if (!value.match(emailValid)) {
        setDisable(true);
        setError('Email is not valid @');
      } else if (error) {
        setError('');
        setDisable(false);
      }
      setValue(value);
    }

    if (name === 'birthday') {
      setValue(value);
    }

    if (name === 'phone') {
      if (!value.match(phoneValid)) {
        setDisable(true);
        setError('Phone number is not valid +380');
      } else if (error) {
        setError('');
        setDisable(false);
      }
      setValue(value);
    }
    if (name === 'city') {
      if (!value.match(cityValid)) {
        setDisable(true);
        setError('Error. Example: Brovary, Kyiv');
      } else if (error) {
        setDisable(false);
        setError('');
      }
      setValue(value);
    }
  };
   const handleDataFormat = date => {
     if (!date?.length) return;
    
     const d = date?.split('-');
  return d.join(''); 
  };

  const udateInput = name => () => {
    const valid =
      name === 'birthday' ?   handleDataFormat(value) : value;
    setActive('');
    console.log(valid)
    dispatch(updateUserInfo({ [name]: valid }));
  };

  const activeBtn = name => () => setActive(name);

  return (
    <>
      <Item ref={active === name ? wrapperRef : null}>
        <Label>{label}</Label>
     <Input
          active={active === name}
          disabled={active !== name}
          type={ 'text'}
          name={name}
          value={value}
          onChange={handleChange}
          minlength="2"
          required/>
        {active === name ? (
          <Button disabled={disable} onClick={udateInput(name)}>
            {' '}
            <SvgUpdate />{' '}
          </Button>
        ) : (
            <Button onClick={activeBtn(name)}>
            {' '}
            <Svg active={active} />
          </Button>
        )}

       
      </Item>
       {error && active === name ? <ErrorText>{error}</ErrorText> : null}
    </>
  );
};
