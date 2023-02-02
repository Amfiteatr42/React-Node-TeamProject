import { useState } from 'react';
import {  format } from 'date-fns'
import {
  AccentBtn,
  Button,
  ContainerButtons,
  Form,
  Input,
  Label,
  LabelImg,
  Textarea,
  LoadImg,
  Title,
  Text,
  Icon,
  InputFile,
} from './ModalAddsPet.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addPets } from 'redux/petsData/petsOperation';
import { AddPhoto } from './AddPhoto';
export const ModalAddsPet = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
 

  const handleSubmit = ({ name, dateOfBirth, comment, breed, imgURL }) => {
    if (name === '' || dateOfBirth === '' || breed === '' || comment === '')
      return;
    dispatch(addPets({ name, dateOfBirth, comment, breed, imgURL }));
    onCloseModal();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: '',
        dateOfBirth:  format(new Date(), 'MM/dd/yyyy'),
        comment: '',
        breed: '',
        imgURL: '',
      }}
    >
      {({ handleSubmit, handleChange, values, setFieldValue }) => (
        <Form onSubmit={handleSubmit}>
          {page === 1 && (
            <>
              <Title>Add pet</Title>
              <Label>Name pet</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Type name pet"
                value={values.name}
                onChange={handleChange}
              />
              <Label>Date of birth</Label>
              <Input
                type="text"
                name="dateOfBirth"
                id="date"
                placeholder={'Type date of birth'}
                value={values.dateOfBirth}
               
            
                onChange={handleChange}
              ></Input>
              <Label>Breed</Label>
              <Input
                type="text"
                name="breed"
                id="breed"
                placeholder={'Type breed'}
                value={values.breed}
                onChange={handleChange}
              />
              <ContainerButtons>
                <Button type="button" onClick={onCloseModal}>
                  Cancel
                </Button>
                <AccentBtn type="button" onClick={() => setPage(2)}>
                  Next
                </AccentBtn>
              </ContainerButtons>
            </>
          )}
          {page === 2 && (
            <>
              <Title>Add pet</Title>
              <Text>Add photo and some comments</Text>
              <LabelImg>
                {!values.imgURL && <Icon />}
                {values.imgURL && (
                  <LoadImg>
                    <AddPhoto file={values.imgURL} />
                  </LoadImg>
                )}
                <InputFile
                  type="file"
                  name="imgURL"
                  accept=".png, .jpg, .jpeg"
                  onChange={event => {
                    setFieldValue('imgURL', event.currentTarget.files[0]);
                  }}
                />{' '}
              </LabelImg>
              <Label>Comments</Label>
              <Textarea
                name="comment"
                id="comment"
                placeholder={'Type comments'}
                value={values.comment}
                onChange={handleChange}
              ></Textarea>
              <ContainerButtons>
                <Button type="button" onClick={() => setPage(1)}>
                  Back
                </Button>
                <AccentBtn type="submit">Done</AccentBtn>
              </ContainerButtons>
            </>
          )}
        </Form>
      )}
    </Formik>
  );
};
