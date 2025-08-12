import * as Yup from 'yup';

export const getValidationSchema = (step) =>
  Yup.object({
    firstname: step === 1 ? Yup.string().required('First name is required') : Yup.string(),
    lastname: step === 2 ? Yup.string().required('Last name is required') : Yup.string(),
    email: step === 3 ? Yup.string().email('Invalid email').required('Email is required') : Yup.string(),
    contact: step === 4 ? Yup.string().required('Contact is required') : Yup.string(),
  });