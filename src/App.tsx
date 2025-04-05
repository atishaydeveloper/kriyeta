import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { PatientDashboard } from './pages/PatientDashboard';
import { DoctorDashboard } from './pages/DoctorDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { BookDemo } from './pages/BookDemo';
import { AIScheduling } from './pages/AIScheduling';
import { EMRAutomation } from './pages/EMRAutomation';
import { RealTimeAnalytics } from './pages/RealTimeAnalytics';
import { VirtualAssistant } from './pages/VirtualAssistant';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/patient" element={<PatientDashboard />} />
          <Route path="/doctor" element={<DoctorDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/demo" element={<BookDemo />} />
          <Route path="/scheduling" element={<AIScheduling />} />
          <Route path="/emr" element={<EMRAutomation />} />
          <Route path="/analytics" element={<RealTimeAnalytics />} />
          <Route path="/assistant" element={<VirtualAssistant />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;