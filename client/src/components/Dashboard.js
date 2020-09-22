import React from 'react';
import Logoutbutton from "./logoutbutton";
import PersistentDrawerLeft from "./Drawer";



function Dashboard(props) {
  
  return (
    <div className="Dashboard">
      <h2>Dashboard</h2>
      <PersistentDrawerLeft/>
      <Logoutbutton/>
      
    </div>
  );
  
  
}

export default Dashboard;
