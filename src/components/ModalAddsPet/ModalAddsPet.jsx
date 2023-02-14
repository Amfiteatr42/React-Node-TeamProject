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
import { parse, format } from 'date-fns';

const today = format(new Date(), 'MM.dd.yyyy');

const validationSchema = yup.object({
  comment: yup.string().min(8).max(120).required('Field is required!'),
  //.matches(/^[ а-яА-Яa-zA-Z0-9]+$/, 'Only alphabetic characters are allowed'),
  name: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z]*$/g, 'Only alphabetic characters are allowed a-zA-Z')
    .required('Field is required!'),
  petImg: yup.mixed(),
  breed: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z]*$/g, 'Only alphabetic characters are allowed a-zA-Z')
    .required('Field is required!'),
  dateOfBirth: yup
    .date()
    .test('len', 'Must be exactly MM.DD.YYYY', (value, { originalValue }) => {
      if (originalValue) {
        return originalValue.length === 10;
      }
    })
    .transform(function (value, originalValue) {
      const result = parse(originalValue, 'MM.dd.yyyy', new Date());
      return result;
    })
    .typeError('Please enter a valid date MM.dd.yyyy')
    .required()
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
      {({
        handleSubmit,
        handleChange,
        values,
        setFieldValue,
        errors,
        touched,
        handleBlur,
        validateForm,
        setTouched,
      }) => (
        <Form onSubmit={handleSubmit}>
          {page === 1 && (
            <>
              <Title>Add pet</Title>
              <Label>Name pet </Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Type name pet"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.name && errors.name && (
                <TextError>{errors.name}</TextError>
              )}

              <Label>Date of birth</Label>
              <Input
                type="text"
                name="dateOfBirth"
                id="date"
                placeholder={'Type date of birth'}
                value={values.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                data-pattern="**.**.****"
              ></Input>
              {touched.dateOfBirth && errors.dateOfBirth && (
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
                onBlur={handleBlur}
              />
              {touched.breed && errors.breed && (
                <TextError>{errors.breed}</TextError>
              )}
              <ContainerButtons>
                <Button type="button" onClick={onCloseModal}>
                  Cancel
                </Button>
                <AccentBtn
                  type="button"
                  onClick={() => {
                    validateForm().then(({ name, dateOfBirth, breed }) => {
                      if (!name && !dateOfBirth && !breed) return setPage(2);
                      setTouched({
                        name: true,
                        dateOfBirth: true,
                        breed: true,
                      });
                      setPage(1);
                    });
                  }}
                >
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
                  onBlur={handleBlur}
                />
              </LabelImg>
              <Label>Comments</Label>
              <Textarea
                name="comment"
                id="comment"
                placeholder={'Type comments'}
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
              ></Textarea>
              {touched.comment && errors.comment && (
                <TextError>{errors.comment}</TextError>
              )}
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
