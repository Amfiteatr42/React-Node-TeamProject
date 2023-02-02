import { useState } from 'react';
import { LoadImage } from './ModalAddsPet.styled';

export const AddPhoto = ({ file }) => {
  const [photo, setPhoto] = useState('');
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setPhoto(reader.result);
  }
  return (
    <>
      {' '}
      <LoadImage src={photo} alt="pet_photo" />
    </>
  );
};
