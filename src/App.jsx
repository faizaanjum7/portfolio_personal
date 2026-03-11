//import { useState } from 'react'
import './App.css'

//import React from 'react'
import Wave from 'react-wavify'

function App() {
  return (
    <div className="ocean">

        <Wave
        className="wave wave1"
        fill='#4fa3d1'
        paused={false}
        options={{
          height: 60,
          amplitude: 40,
          speed: 0.15,
          points: 3
        }}
      />

      <Wave
        className="wave wave2"
        fill='#2e8bc0'
        paused={false}
        options={{
          height: 70,
          amplitude: 35,
          speed: 0.12,
          points: 3
        }}
      />

    </div>
  );
}

export default App;