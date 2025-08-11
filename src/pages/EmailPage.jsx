import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail } from '../components/formSlice';
import { useNavigate } from 'react-router-dom';

function EmailPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(state => state.form.email);

  return (
    <div>
      <h2>Email</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => dispatch(updateEmail(e.target.value))}
      />
      <button onClick={() => navigate('/lastname')}>Back</button>
      <button onClick={() => navigate('/contact')}>Next</button>
    </div>
  );
}

export default EmailPage;
