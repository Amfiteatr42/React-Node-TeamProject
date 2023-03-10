import { useState } from 'react';
import s from './index.module.css';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { noticesOperations } from 'redux/notices';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken } from 'redux/auth/selectors';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Plus } from '../../images/svg/big-plus.svg';

const validationSchema = yup.object({
  sex: yup.string().required('Field is required!'),
  location: yup
    .string()
    .min(2)
    .max(36)
    .matches(/\D/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  price: yup
    .string()
    .min(1)
    .max(6)

    .matches(/^[0-9]/, 'Only number characters')
    .notRequired(),
  petImg: yup.mixed(),
  comments: yup
    .string()
    .min(4)
    .max(120)
    .matches(/^\D*$/g, 'Only alphabetic characters and symbols are allowed')
    .required('Field is required!'),
});

const StepTwo = ({ formData, setFormData, prevStep, onClose }) => {
  const [direction, setDirection] = useState('back');
  const [fileInput, setFileInput] = useState(formData.petImg);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(getAuthToken);

  const handleAddAvatar = (e, setFieldValue) => {
    const [file] = e.target.files;
    if (file) {
      setFileInput(file);
      setFieldValue('petImg', file);
      setFormData(values => ({ ...values, petImg: file }));
    }
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={async values => {
          setFormData({
            ...values,
            petImg: fileInput,
            price: values.categoryId !== '1' ? 0 : values.price,
          });
          if (direction === 'back') {
            prevStep();
          }
          if (direction === 'forward') {
            try {
              await dispatch(
                noticesOperations.createNotices({ values, token })
              );
              navigate('/notices/own');
              onClose();
            } catch (error) {}
          }
        }}
      >
        {({ setFieldValue }) => (
          <Form className={s.textFildWrap}>
            <fieldset className={s.sexWrap}>
              <legend className={s.sexM}>The sex*:</legend>
              <label className={s.sexLabel} htmlFor="male">
                <Field
                  className={s.inputSex}
                  type="radio"
                  id="male"
                  name="sex"
                  alt="male"
                  value="male"
                />
                <span className={s.sexIcon}></span>
                <span className={s.sexText}>Male</span>
              </label>

              <label className={s.sexLabel} htmlFor="female">
                <Field
                  className={s.inputSex}
                  type="radio"
                  id="female"
                  name="sex"
                  alt="female"
                  value="female"
                />
                <span className={s.sexIconFemale}></span>
                <span className={s.sexText}>Female</span>
              </label>
            </fieldset>
            <ErrorMessage
              name="sex"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
            <div className={s.textFildWrap}>
              <label htmlFor="location" type="text" className={s.label}>
                Location*:
              </label>
              <Field
                id="location"
                name="location"
                placeholder="Type location"
                className={s.inputText}
              />
              <ErrorMessage
                name="location"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
            </div>
            {formData.categoryId === '1' && (
              <div className={s.textFildWrap}>
                <label htmlFor="price" type="text" className={s.label}>
                  Price*:
                </label>
                <Field
                  id="price"
                  name="price"
                  type="text"
                  placeholder="Type price"
                  className={s.inputText}
                />
                <ErrorMessage
                  name="price"
                  render={msg => <div className={s.errorMsg}>{msg}</div>}
                />
              </div>
            )}
            <label htmlFor="petImg" className={s.avatarLabel}>
              Load the pet's image*:
            </label>
            <div className={s.addImage}>
              {fileInput ? (
                <img
                  id="petImg"
                  className={s.selectedAvatar}
                  src={URL.createObjectURL(fileInput)}
                  alt={fileInput.name}
                />
              ) : (
                <Plus />
              )}

              <input
                className={s.inputFile}
                type="file"
                id="petImg"
                name="petImg"
                accept=".jpg,.png"
                onChange={e => handleAddAvatar(e, setFieldValue)}
              />
              <ErrorMessage
                name="petImg"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
            </div>
            <div className={s.textFildWrap}>
              <label className={s.label} htmlFor="comments">
                Comments*:
              </label>
              <Field
                component="textarea"
                name="comments"
                id="comments"
                rows="3"
                placeholder="Type comments"
                className={s.inputTextarea}
              ></Field>
              <ErrorMessage
                name="comments"
                render={msg => <div className={s.errorMsg}>{msg}</div>}
              />
            </div>
            <div className={s.submitBtnWrapp}>
              <button
                type="submit"
                className={s.submitBtn}
                onClick={() => setDirection('forward')}
              >
                Done
              </button>
              <button
                type="submit"
                className={s.submitBtn}
                onClick={() => setDirection('back')}
              >
                Back
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StepTwo;
