import React from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../components/formSlice';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = useSelector(state => state.form.contact);
  const formData = useSelector(state => state.form);
  
  const formik = useFormik({
    initialValues: {contact: contact || '',},
    validate: values => {
      let errors = {};
      if (!values.contact) errors.contact = 'Required';
      return errors;
    },
    onSubmit: (values) => {
      dispatch(updateContact(values.contact));
      console.log("Final Form Data:", formData);
      alert("Form submitted! Check console.");
    },
});
  return (
    <form onSubmit={formik.handleSubmit}>
    <div>
      <h2>Contact Number</h2>
      <input
        type="text"
        name="contact"

        value={formik.values.contact}
        onChange={formik.handleChange}
      />
      <div style ={{ marginTop: '1rem' }}>
      {formik.errors.firstname && <div style={{color: 'red'}}>{formik.errors.firstname}</div>}
      <button type="button" onClick={() => navigate('/email')}>Back</button>

      <button type="submit">Submit</button>
      </div>
    </div>
    </form>
  );
}

export default ContactPage;
