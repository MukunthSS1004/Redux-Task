import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFirstName } from '../components/formSlice';
import { useNavigate } from 'react-router-dom';

function FirstNamePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const firstname = useSelector(state => state.form.firstname);

  return (
    <div>
      <h2>First Name</h2>
      <input
        type="text"
        value={firstname}
        onChange={(e) => dispatch(updateFirstName(e.target.value))}
      />
      <button onClick={() => navigate('/lastname')}>Next</button>
    </div>
  );
}

export default FirstNamePage;
