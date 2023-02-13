import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './index.module.css';
import * as yup from 'yup';
import { parse } from 'date-fns';
import { format } from 'date-fns';

const today = format(new Date(), 'dd.MM.yyyy');

const validationSchema = yup.object({
  title: yup
    .string()
    .min(2)
    .max(48)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  categoryId: yup.string().required('Category is required!'),
  petname: yup
    .string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  breed: yup
    .string()
    .min(2)
    .max(36)
    .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
    .required('Field is required!'),
  dateofbirth: yup
    .date()
    .transform((value, originalValue) =>
      parse(originalValue, 'dd.MM.yyyy', new Date())
    )
    .typeError('Please enter a valid date DD.MM.YYYY')
    .required()
    .max(today),
});

const StepOne = ({ formData, setFormData, nextStep, onClose }) => {
  return (
    <div>
      <p className={s.text}>Write some information about your notice.</p>
      <Formik
        validationSchema={validationSchema}
        initialValues={formData}
        onSubmit={values => {
          setFormData({ ...values });
          nextStep();
        }}
      >
        <Form>
          <div
            role="group"
            aria-labelledby="my-radio-group"
            className={s.radioWrapper}
          >
            <label className={s.wrapprerInput} htmlFor="lost/found">
              <Field
                type="radio"
                name="categoryId"
                value="2"
                id="lost/found"
                className={s.inputRadio}
              />
              <div className={s.radioBtn}>lost/found</div>
            </label>
            <label className={s.wrapprerInput} htmlFor="in_good_hands">
              <Field
                type="radio"
                name="categoryId"
                value="3"
                id="in good hands"
                className={s.inputRadio}
              />
              <div className={s.radioBtn}>in good hands</div>
            </label>
            <label className={s.wrapprerInput} htmlFor="sell">
              <Field
                type="radio"
                name="categoryId"
                value="1"
                id="sell"
                className={s.inputRadio}
              />
              <div className={s.radioBtn}>sell</div>
            </label>
          </div>
          <ErrorMessage
            name="categoryId"
            render={msg => <div className={s.errorMsg}>{msg}</div>}
          />
          <div className={s.textFildWrap}>
            <label htmlFor="title" type="text" className={s.label}>
              Tittle of ad*:
            </label>
            <Field
              id="title"
              name="title"
              placeholder="Type name pet"
              className={s.inputText}
            />
            <ErrorMessage
              name="title"
              render={msg => <p className={s.errorMsg}>{msg}</p>}
            />
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="petname" type="text" className={s.label}>
              Name pet*:
            </label>
            <Field
              id="petname"
              name="petname"
              placeholder="Type name pet"
              className={s.inputText}
            />
            <ErrorMessage
              name="petname"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="dateofbirth" type="text" className={s.label}>
              Date of birth*:
            </label>
            <Field
              id="dateofbirth"
              name="dateofbirth"
              placeholder="Type date of birth"
              className={s.inputText}
              data-pattern="**.**.****"
            />
            <ErrorMessage
              name="dateofbirth"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.textFildWrap}>
            <label htmlFor="breed" type="text" className={s.label}>
              Breed*:
            </label>
            <Field
              id="breed"
              name="breed"
              placeholder="Type breed"
              className={s.inputText}
              autoComplete="off"
            />
            <ErrorMessage
              name="breed"
              render={msg => <div className={s.errorMsg}>{msg}</div>}
            />
          </div>
          <div className={s.submitBtnWrapp}>
            <button type="submit" className={s.submitBtn}>
              Next
            </button>
            <button type="button" className={s.submitBtn} onClick={onClose}>
              Cancel
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default StepOne;
