import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Buttons from './components/ButtonsComponents/Buttons.js';
function App() {
  return (
    <div className="App">
      <h1>Astronomy picture of the day</h1>
      <Buttons />

      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀! */}
      </p>
    </div>
  );
}

export default App;
