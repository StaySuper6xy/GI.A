import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DollarSign, TrendingUp, ShoppingCart, BarChart2 } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <h2 className="sidebar-title">AI Assistants</h2>
        <nav className="sidebar-nav">
          <Link 
            to="/dashboard/filly" 
            className={`sidebar-link ${isActive('/dashboard/filly') ? 'active' : ''}`}
          >
            <DollarSign size={20} />
            <span>Filly - Finance</span>
          </Link>
          <Link 
            to="/dashboard/marcus" 
            className={`sidebar-link ${isActive('/dashboard/marcus') ? 'active' : ''}`}
          >
            <TrendingUp size={20} />
            <span>Marcus - Marketing</span>
          </Link>
          <Link 
            to="/dashboard/sally" 
            className={`sidebar-link ${isActive('/dashboard/sally') ? 'active' : ''}`}
          >
            <ShoppingCart size={20} />
            <span>Sally - Sales</span>
          </Link>
          <Link 
            to="/dashboard/dan" 
            className={`sidebar-link ${isActive('/dashboard/dan') ? 'active' : ''}`}
          >
            <BarChart2 size={20} />
            <span>Dan - Data Reports</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
