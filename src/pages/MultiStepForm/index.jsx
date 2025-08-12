import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import {
  updateFirstname,
  updateLastname,
  updateEmail,
  updateContact,
} from '../../redux/formSlice';
import { getValidationSchema } from './validator';
import {
  FirstNameStep,
  LastNameStep,
  EmailStep,
  ContactStep,
} from '../../components/FormSteps';

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state) => state.form);

  const [step, setStep] = useState(1);

  const validationSchema = getValidationSchema(step);

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
          <FirstNameStep formik={formik} dispatch={dispatch} updateFirstname={updateFirstname} />
        )}
        {step === 2 && (
          <LastNameStep formik={formik} dispatch={dispatch} updateLastname={updateLastname} />
        )}
        {step === 3 && (
          <EmailStep formik={formik} dispatch={dispatch} updateEmail={updateEmail} />
        )}
        {step === 4 && (
          <ContactStep formik={formik} dispatch={dispatch} updateContact={updateContact} />
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