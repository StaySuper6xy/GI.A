import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DollarSign, TrendingUp, ShoppingCart, BarChart2, Home } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h2 className="sidebar-title">Gia Dashboard</h2>
        <nav className="sidebar-nav">
          <Link 
            to="/dashboard" 
            className={`sidebar-link ${isActive('/dashboard') ? 'active' : ''}`}
          >
            <Home size={20} />
            <span>Main Dashboard</span>
          </Link>
          <Link 
            to="/dashboard/finance" 
            className={`sidebar-link ${isActive('/dashboard/finance') ? 'active' : ''}`}
          >
            <DollarSign size={20} />
            <span>Finance</span>
          </Link>
          <Link 
            to="/dashboard/marketing" 
            className={`sidebar-link ${isActive('/dashboard/marketing') ? 'active' : ''}`}
          >
            <TrendingUp size={20} />
            <span>Marketing</span>
          </Link>
          <Link 
            to="/dashboard/sales" 
            className={`sidebar-link ${isActive('/dashboard/sales') ? 'active' : ''}`}
          >
            <ShoppingCart size={20} />
            <span>Sales</span>
          </Link>
          <Link 
            to="/dashboard/data" 
            className={`sidebar-link ${isActive('/dashboard/data') ? 'active' : ''}`}
          >
            <BarChart2 size={20} />
            <span>Data Reports</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
