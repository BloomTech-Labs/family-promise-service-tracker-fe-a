import React from 'react';
//import RenderPMDashboard from './RenderPMDashboard';
import RenderAdminDashboard from './RenderAdminDashboard';

function DashboardContainer(props) {
  // add conditional to check userole and display correct Dahsboard accordingly
  return (
    <>
      <RenderAdminDashboard />
    </>
  );
}

export default DashboardContainer;
