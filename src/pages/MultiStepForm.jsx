import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  updateFirstname,
  updateLastname,
  updateEmail,
  updateContact,
} from '../components/formSlice'; 

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form);

  const [step, setStep] = useState(1);

  const validationSchema = Yup.object({
    firstname: step === 1 ? Yup.string().required('First name is required') : Yup.string(),
    lastname: step === 2 ? Yup.string().required('Last name is required') : Yup.string(),
    email: step === 3 ? Yup.string().email('Invalid email').required('Email is required') : Yup.string(),
    contact: step === 4 ? Yup.string().required('Contact is required') : Yup.string(),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(updateFirstname(values.firstname));
      dispatch(updateLastname(values.lastname));
      dispatch(updateEmail(values.email));
      dispatch(updateContact(values.contact));
      navigate('/result');
    },
  });

  const handleNext = () => {
    if (formik.isValid && formik.values[Object.keys(formik.values)[step - 1]]) {
      setStep(step + 1);
    } else {
      formik.handleSubmit();
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <div>
            <h2>First Name</h2>
            <input
              type="text"
              name="firstname"
              value={formik.values.firstname}
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(updateFirstname(e.target.value));
              }}
            />
            {formik.errors.firstname && <p style={{ color: 'red' }}>{formik.errors.firstname}</p>}
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Last Name</h2>
            <input
              type="text"
              name="lastname"
              value={formik.values.lastname}
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(updateLastname(e.target.value));
              }}
            />
            {formik.errors.lastname && <p style={{ color: 'red' }}>{formik.errors.lastname}</p>}
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Email</h2>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(updateEmail(e.target.value));
              }}
            />
            {formik.errors.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}
          </div>
        )}

        {step === 4 && (
          <div>
            <h2>Contact</h2>
            <input
              type="text"
              name="contact"
              value={formik.values.contact}
              onChange={(e) => {
                formik.handleChange(e);
                dispatch(updateContact(e.target.value));
              }}
            />
            {formik.errors.contact && <p style={{ color: 'red' }}>{formik.errors.contact}</p>}
          </div>
        )}

        <div style={{ marginTop: '20px' }}>
          {step > 1 && <button type="button" onClick={handleBack}>Back</button>}
          {step < 4 && <button type="button" onClick={handleNext}>Next</button>}
          {step === 4 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
