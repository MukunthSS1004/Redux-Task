import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstNamePage from './pages/FirstNamePage';
import LastNamePage from './pages/LastNamePage';
import EmailPage from './pages/EmailPage';
import ContactPage from './pages/ContactPage';
import { useSelector } from 'react-redux';

function App() {
  const { firstname, lastname } = useSelector(state => state.form);
  return (
    <Router>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '20px',
        fontWeight: 'bold',
        fontSize: '1.2rem'
      }}>
        {firstname && lastname && `${firstname} ${lastname}`}
      </div>
      <Routes>
        <Route path="/" element={<FirstNamePage />} />
        <Route path="/lastname" element={<LastNamePage />} />
        <Route path="/email" element={<EmailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
