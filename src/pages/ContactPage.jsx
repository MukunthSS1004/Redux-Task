import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from '../components/formSlice';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contact = useSelector(state => state.form.contact);
  const formData = useSelector(state => state.form);

  const handleSubmit = () => {
    console.log("Final Form Data:", formData);
    alert("Form submitted! Check console.");
  };

  return (
    <div>
      <h2>Contact Number</h2>
      <input
        type="text"
        value={contact}
        onChange={(e) => dispatch(updateContact(e.target.value))}
      />
      <button onClick={() => navigate('/email')}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default ContactPage;
