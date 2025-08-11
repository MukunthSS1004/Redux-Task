import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateLastName } from '../components/formSlice';
import { useNavigate } from 'react-router-dom';

function LastNamePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const lastname = useSelector(state => state.form.lastname);

  return (
    <div>
      <h2>Last Name</h2>
      <input
        type="text"
        value={lastname}
        onChange={(e) => dispatch(updateLastName(e.target.value))}
      />
      <button onClick={() => navigate('/')}>Back</button>
      <button onClick={() => navigate('/email')}>Next</button>
    </div>
  );
}

export default LastNamePage;
