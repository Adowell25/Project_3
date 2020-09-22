import React from 'react';
import Loginbutton from "./loginbutton";


function Landing(props) {
  
  return (
    <div className="Landing">
      <h2>Landing</h2>
      <Loginbutton onlogin={props.onlogin}/>
      
    </div>
  );
  
  
}

export default Landing;
