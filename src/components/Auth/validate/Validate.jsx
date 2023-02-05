import * as Yup from 'yup';

const strRe =
  /^(?:[A-Za-z]{2,}(?:(\.\s|'s\s|\s?-\s?|\s)?(?=[A-Za-z]+))){1,2}(?:[A-Za-z]+)?$/;
// const phone = /^[\d+][\d()-]{4,14}\d$/;
const phone = /^\+380[0-9]{9}$/;
// const beginWithoutDigit = /^\D.*$/;
// const withoutSpecialChars = /^[^-() /]*$/;
const containsLetters = /^.*[a-zA-Z]+.*$/;

export const ValidateRegister = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Too Short! Minimum 2 letters')
    .max(32, 'Too Long! Maximum 32 letters')
    .matches(containsLetters, 'only letters please')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .matches(
      /^([a-zA-Z0-9]{1}[\w\-.]{0,}[a-zA-Z0-9]{1})+@([\w-]+.)+[\w]{2,4}$/,
      'Invalid email'
    )
    .min(10, 'Email is too short, must be 10 chars min!')
    .max(63, 'Email is too long, must be 63 chars max!')
    .required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(32, 'Too Long!'),
  city: Yup.string()
    .min(2, 'Too Short!')
    .max(14, 'Too Long!')
    .matches(strRe, 'only letters')
    .required('Required'),
  phone: Yup.string()
    .max(15, 'Too Long!')
    .matches(phone, 'The phone contains only numbers and starts with "+380"')
    .required('Required'),
});

export const ValidateLogin = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(7, 'Password is too short - should be 7 chars minimum.')
    .max(32, 'Too Long! 32 chars max'),
});
