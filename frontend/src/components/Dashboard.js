import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
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
          <Route path="/" element={<div className="welcome-message">
            <h2>Welcome to Your AI-Powered Dashboard</h2>
            <p>Select an AI assistant from the sidebar to get started</p>
          </div>} />
          <Route path="/filly" element={<Filly />} />
          <Route path="/marcus" element={<Marcus />} />
          <Route path="/sally" element={<Sally />} />
          <Route path="/dan" element={<Dan />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
