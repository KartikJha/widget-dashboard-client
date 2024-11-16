import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/widget-dashboard-client/" element={<LoginForm />} />
        <Route path="/widget-dashboard-client/signup" element={<SignupForm />} />
        <Route path="/widget-dashboard-client/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
