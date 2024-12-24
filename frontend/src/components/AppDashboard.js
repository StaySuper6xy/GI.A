import React from 'react';

const AppDashboard = ({ dashboard, chatbot }) => {
  return (
    <div className="app-dashboard">
      <div className="chat-interface-container">
        {chatbot}
      </div>
      <div className="dashboard-content-container">
        {dashboard}
      </div>
    </div>
  );
};

export default AppDashboard;
