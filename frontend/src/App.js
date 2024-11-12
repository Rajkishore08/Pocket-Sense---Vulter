import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ExpenseTracker from './components/ExpenseTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
