import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstName } from '../components/formSlice';
import { useNavigate } from 'react-router-dom';

function FirstNamePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstname = useSelector(state => state.form.firstname);

  const formik = useFormik({
    initialValues: {firstname: firstname || '',},
    validate: values => {
      let errors = {};
      if (!values.firstname) errors.firstname = 'Required';
      return errors;
    },
    
    onSubmit: (values) => {
      dispatch(updateFirstName(values.firstname));
      navigate('/lastname');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <div>
      <h2>First Name</h2>
      <input
        type="text"
        name="firstname"
        value={formik.values.firstname}
        onChange={formik.handleChange}
      />
      <div style={{ marginTop: '1rem' }}>
      {formik.errors.firstname && <div style={{color: 'red'}}>{formik.errors.firstname}</div>}
      <button type="submit">Next</button>
      </div>
    </div>
    </form>
  );
}

export default FirstNamePage;
