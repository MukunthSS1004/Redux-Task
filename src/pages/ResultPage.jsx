import React from 'react';
import { useSelector } from 'react-redux';

const ResultPage = () => {
  const { firstname, lastname } = useSelector((state) => state.form);

  return (
    <div>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '20px',
        fontWeight: 'bold'
      }}>
        {firstname} {lastname}
      </div>
      <h1>Form Submitted Successfully 🎉</h1>
    </div>
  );
};

export default ResultPage;
