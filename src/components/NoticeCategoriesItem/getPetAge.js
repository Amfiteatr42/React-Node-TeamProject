// import { milliseconds } from 'date-fns';

export default function getPetAge(dateString) {
  // let today = new Date();
  // let birthDate = new Date(dateString);
  // let age = today.getFullYear() - birthDate.getFullYear();
  // let m = today.getMonth() - birthDate.getMonth();
  // // console.log(age, m);
  // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //   age--;
  // }
  // return age ? `${age} years` : `${m} мonth`;

  ///////////////////////////////////////////////////////////////////

  const today = new Date();
  const [
    // eslint-disable-next-line
    day,
    month,
    year,
  ] = dateString.split('.');

  const ageY = today.getFullYear() - year;
  const ageM = today.getMonth() - month;

  if (ageY > 0) {
    return `${ageY} year`;
  } else if (ageM > 0) {
    return `${ageM} month`;
  }
  return 'less than one month';
}
