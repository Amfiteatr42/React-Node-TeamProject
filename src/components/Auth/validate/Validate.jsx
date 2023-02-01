import * as Yup from 'yup';

const phone = /^[\d+][\d()-]{4,14}\d$/;
const beginWithoutDigit = /^\D.*$/;
const withoutSpecialChars = /^[^-() /]*$/;
const containsLetters = /^.*[a-zA-Z]+.*$/;

export const ValidateRegister = Yup.object().shape({
  userName: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(containsLetters, 'only letters')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(containsLetters, 'Password can only contain Latin letters.')
    .matches(
      withoutSpecialChars,
      'password must consist of letters and numbers'
    )
    .matches(beginWithoutDigit, 'first letters then numbers'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(containsLetters, 'only letters')
    .required('Required'),
  phone: Yup.string()
    .min(10, 'Too Short!')
    .max(13, 'Too Long!')
    .matches(phone, 'The phone contains only numbers')
    .required('Required'),
});

export const ValidateLogin = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(containsLetters, 'Password can only contain Latin letters.')
    .matches(
      withoutSpecialChars,
      'password must consist of letters and numbers'
    )
    .matches(beginWithoutDigit, 'first letters then numbers'),
});
