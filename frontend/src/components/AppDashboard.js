import React from 'react';

const AppDashboard = ({ dashboard, chatbot }) => {
  return (
    <div className="app-dashboard-wrapper">
      <div className="app-dashboard-container">
        <aside className="chatbot-sidebar">
          {chatbot}
        </aside>
        <main className="main-content">
          {dashboard}
        </main>
      </div>
    </div>
  );
};

export default AppDashboard;