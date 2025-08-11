import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstNamePage from './pages/FirstNamePage';
import LastNamePage from './pages/LastNamePage';
import EmailPage from './pages/EmailPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
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
