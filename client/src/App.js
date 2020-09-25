import React from 'react';
import PersistentDrawerLeft from "./components/Drawer";
import './App.css';
// import Router from "../../routes/htmlRoutes"
// import { BrowserRouter } from "react-router-dom";
import Loginbutton from "./components/loginbutton";

function App() {
  return (
    <div className="App">
      
      <PersistentDrawerLeft/>
    </div>
  );
}

export default App;
