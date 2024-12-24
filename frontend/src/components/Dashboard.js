import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import MainDashboard from './MainDashboard';
import AppDashboard from './AppDashboard';
import FinanceDashboard from './finance/FinanceDashboard';
import Filly from './chatbots/Filly';
import Marcus from './chatbots/Marcus';
import Sally from './chatbots/Sally';
import Dan from './chatbots/Dan';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Routes>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/finance" element={
            <AppDashboard 
              dashboard={<FinanceDashboard />}
              chatbot={<Filly />}
            />
          } />
          <Route path="/marketing" element={
            <AppDashboard 
              dashboard={<div>Marketing Dashboard (To be implemented)</div>}
              chatbot={<Marcus />}
            />
          } />
          <Route path="/sales" element={
            <AppDashboard 
              dashboard={<div>Sales Dashboard (To be implemented)</div>}
              chatbot={<Sally />}
            />
          } />
          <Route path="/data" element={
            <AppDashboard 
              dashboard={<div>Data Reports Dashboard (To be implemented)</div>}
              chatbot={<Dan />}
            />
          } />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
