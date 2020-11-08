import React, { useState } from 'react';
import Room from './Room.js';
import './App.css';

function App(){

  let [isOn, setOn] = useState(true);
  let light = isOn ? "on" : "off";

  let [isTemp, setTemp] = useState(22);

  let btnDark = isOn ? "button-light" : "button-dark";

  return(
    <div className={`main ${light}`}>
        <div className="container">
          <div className="room">
            <Room light={isOn ? 'ON' : 'OFF'}/>
            <br/>
            <button className={btnDark} onClick={()=> setOn(true)}>ON</button>
            <button className={btnDark} onClick={()=> setOn(false)}>OFF</button>
          </div>
          <br/>
          <div className="temp">
            <h3>Temperature of room is : {isTemp}°C </h3>
            <br/>
            <button className={btnDark} onClick={()=> setTemp(++isTemp)}>Increase</button>
            <button className={btnDark} onClick={()=> setTemp(--isTemp)}>Decrease</button>
          </div>
        </div>
    </div>
  );
}

export default App;