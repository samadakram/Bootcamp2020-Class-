import React, { useState } from 'react';
import Room from './Room.js';
import './App.css';

function App(){

  let [isOn, setOn] = useState(true);
  let light = isOn ? "on" : "off";

  return(
    <div className={`main ${light}`}>
        <div className="container">
          <Room light={isOn ? 'ON' : 'OFF'}/>
          <br/>
          <button onClick={()=> setOn(true)}>ON</button>
          <button onClick={()=> setOn(false)}>OFF</button>
        </div>
    </div>
  );
}

export default App;