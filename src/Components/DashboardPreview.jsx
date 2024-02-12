import React from 'react';
import Dashboard from '../Images/dashboard.png';
import '../Styles/dashboardPreview.scss';

const DashboardPreview = () => {
  return (
    <div className="app__dashboard">
      <img src={Dashboard} alt="dashboard" draggable={false} />
    </div>
  );
};

export default DashboardPreview;
