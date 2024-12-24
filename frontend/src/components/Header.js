import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <header className="App-header">
      <h1>Gia - AI Integrated Business Management Solution</h1>
      <nav>
        {isLoggedIn ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
