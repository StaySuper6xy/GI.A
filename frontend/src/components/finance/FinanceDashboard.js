import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CreditCard, FileText, PieChart, Settings } from 'lucide-react';

const FinanceDashboard = () => {
  const [accountBalance] = useState(10000); // Example balance

  return (
    <div className="finance-dashboard">
      <h2>Finance Dashboard</h2>
      <div className="account-overview">
        <h3>Account Overview</h3>
        <p>Current Balance: ${accountBalance.toFixed(2)}</p>
      </div>
      <div className="finance-actions">
        <Link to="/dashboard/finance/invoicing" className="finance-action-link">
          <FileText />
          <span>Invoicing</span>
        </Link>
        <Link to="/dashboard/finance/expenses" className="finance-action-link">
          <CreditCard />
          <span>Expenses</span>
        </Link>
        <Link to="/dashboard/finance/reports" className="finance-action-link">
          <PieChart />
          <span>Financial Reports</span>
        </Link>
        <Link to="/dashboard/finance/settings" className="finance-action-link">
          <Settings />
          <span>Accounting Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default FinanceDashboard;
