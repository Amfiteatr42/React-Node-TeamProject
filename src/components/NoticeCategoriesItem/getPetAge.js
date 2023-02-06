export default function getPetAge(dateString) {
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
