import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, TrendingUp, ShoppingCart, BarChart2 } from 'lucide-react';

const MainDashboard = () => {
  return (
    <div className="main-dashboard">
      <h1>Welcome to Gia Dashboard</h1>
      <p>Select an app to get started:</p>
      <div className="app-grid">
        <Link to="/dashboard/finance" className="app-card">
          <DollarSign />
          <span>Finance</span>
        </Link>
        <Link to="/dashboard/marketing" className="app-card">
          <TrendingUp />
          <span>Marketing</span>
        </Link>
        <Link to="/dashboard/sales" className="app-card">
          <ShoppingCart />
          <span>Sales</span>
        </Link>
        <Link to="/dashboard/data" className="app-card">
          <BarChart2 />
          <span>Data Reports</span>
        </Link>
      </div>
    </div>
  );
};

export default MainDashboard;
