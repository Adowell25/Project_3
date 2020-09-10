import React from 'react';
import PersistentDrawerLeft from "./components/Drawer";
import './App.css';
import Loginbutton from "./components/loginbutton";
import Logoutbutton from "./components/logoutbutton";

function App() {
  return (
    <div className="App">
      <PersistentDrawerLeft/>
      <Loginbutton/>
      <Logoutbutton/>
    </div>
  );

  
}

export default App;
