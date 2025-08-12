import React from 'react';

export const FirstNameStep = ({ formik, dispatch, updateFirstname }) => (
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
);

export const LastNameStep = ({ formik, dispatch, updateLastname }) => (
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
);

export const EmailStep = ({ formik, dispatch, updateEmail }) => (
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
);

export const ContactStep = ({ formik, dispatch, updateContact }) => (
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
);