import React, { useState } from 'react';
import Room from './Room.js';
import './App.css';

function App(){

  let [isOn, setOn] = useState(false);

  return(
    <div>
      <Room light={isOn ? 'ON' : 'OFF'} />
    </div>
  );
}

export default App;