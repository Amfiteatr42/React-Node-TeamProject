import { useState } from 'react';
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
  TextError,
} from './ModalAddsPet.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addPets } from 'redux/petsData/petsOperation';
import { AddPhoto } from './AddPhoto';

import * as yup from 'yup';
import { parse } from 'date-fns';

const today = new Date();

const validationSchema = yup.object({
  comment: yup.string().min(8).max(120),
  //.matches(/^[ а-яА-Яa-zA-Z0-9]+$/, 'Only alphabetic characters are allowed'),
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z, а-яА-Я]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z, а-яА-Я]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  dateOfBirth: yup
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
    .max(today),
});

export const ModalAddsPet = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const handleSubmit = form => {
    dispatch(addPets(form));
    onCloseModal();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={{
        name: '',
        dateOfBirth: '',
        comment: '',
        breed: '',
        petImg: '',
      }}
    >
      {({ handleSubmit, handleChange, values, setFieldValue, errors }) => (
        <Form onSubmit={handleSubmit}>
          {page === 1 && (
            <>
              <Title>Add pet</Title>
              <Label>
                Name pet
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Type name pet"
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <TextError>{errors.name}</TextError>}
              </Label>

              <Label>Date of birth</Label>
              <Input
                type="text"
                name="dateOfBirth"
                id="date"
                placeholder={'Type date of birth'}
                value={values.dateOfBirth}
                onChange={handleChange}
              ></Input>
              {errors.dateOfBirth && (
                <TextError>{errors.dateOfBirth}</TextError>
              )}
              <Label>Breed</Label>
              <Input
                type="text"
                name="breed"
                id="breed"
                placeholder={'Type breed'}
                value={values.breed}
                onChange={handleChange}
              />
              {errors.breed && <TextError>{errors.breed}</TextError>}
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
                {!values.petImg && <Icon />}
                {values.petImg && (
                  <LoadImg>
                    <AddPhoto file={values.petImg} />
                  </LoadImg>
                )}
                <InputFile
                  type="file"
                  name="petImg"
                  accept=".png, .jpg, .jpeg"
                  onChange={event => {
                    setFieldValue('petImg', event.currentTarget.files[0]);
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
              {errors.comment && <TextError>{errors.comment}</TextError>}
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
