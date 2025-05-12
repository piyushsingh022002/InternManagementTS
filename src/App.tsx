import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AddIntern from './pages/AddIntern';
import InternPage from './pages/InternPage';
import Interndashboard from './pages/Interndashboard';
import HrPage from './pages/HrPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hr-page" element={<HrPage />} />
            <Route path="/intern-page" element={<InternPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/intern-dashboard" element={<Interndashboard />} />
            <Route path="/add-intern" element={<AddIntern />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
