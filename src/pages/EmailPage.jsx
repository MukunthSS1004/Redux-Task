import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail } from '../components/formSlice';
import { useNavigate } from 'react-router-dom';

function EmailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(state => state.form.email);
  
  const formik = useFormik({
    initialValues: {email: email || '',},
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = 'Required';
      return errors;
    },
    
    onSubmit: (values) => {
      dispatch(updateEmail(values.email));
      navigate('/contact');
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <div>
      <h2>Email</h2>
      <input
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
      />
      <div style={{ marginTop: '1rem' }}>
      <button type="button" onClick={() => navigate('/lastname')}>Back</button>
      {formik.errors.firstname && <div style={{color: 'red'}}>{formik.errors.firstname}</div>}
      <button type="submit">Next</button>
      </div>
    </div>
    </form>
  );
}

export default EmailPage;
