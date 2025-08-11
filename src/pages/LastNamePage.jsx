import React from 'react';
import { useFormik } from 'formik'; 
import { useDispatch, useSelector } from 'react-redux';
import { updateLastName } from '../components/formSlice';
import { useNavigate } from 'react-router-dom';

function LastNamePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastname = useSelector(state => state.form.lastname);
  
  const formik = useFormik({
    initialValues: {lastname: lastname || '', },
    validate: values => {
      let errors = {};
      if (!values.lastname) errors.lastname = 'Required';
      return errors;
    },
       
    onSubmit: (values) => {
      dispatch(updateLastName(values.lastname));
      navigate('/email');
       
    }
  });
  return (
    <form onSubmit={formik.handleSubmit}>
    <div>
      <h2>Last Name</h2>
      <input
        type="text"
        name="lastname"
        value={formik.values.lastname}
        onChange={formik.handleChange}
      />
      <div style={{ marginTop: '1rem' }}>
      <button type="button" onClick={() => navigate('/')}>Back</button>
      {formik.errors.firstname && <div style={{color: 'red'}}>{formik.errors.firstname}</div>}
      <button type="submit">Next</button>
      </div>
    </div>
   </form>
  );
  
}

export default LastNamePage;
