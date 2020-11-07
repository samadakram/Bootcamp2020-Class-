import React, { useState } from 'react';
import Room from './Room.js';
import './App.css';

function App(){

  let [isOn, setOn] = useState(true);
  let light = isOn ? "on" : "off";

  let [isTemp, setTemp] = useState(22);

  return(
    <div className={`main ${light}`}>
        <div className="container">
          <div className="room">
            <Room light={isOn ? 'ON' : 'OFF'}/>
            <br/>
            <button onClick={()=> setOn(true)}>ON</button>
            <button onClick={()=> setOn(false)}>OFF</button>
          </div>
          <br/>
          <div className="temp">
            <h3>Temperature of room is : {isTemp}°C </h3>
            <br/>
            <button onClick={()=> setTemp(++isTemp)}>Increase</button>
            <button onClick={()=> setTemp(--isTemp)}>Decrease</button>
          </div>
        </div>
    </div>
  );
}

export default App;