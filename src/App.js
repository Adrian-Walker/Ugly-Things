import React from 'react';
import './style.css';

function App() {
  return (
    // Main App
    <div className="app">
      {/* inputs */}
      <div className="inputs">
        <ul>
          <li><input placeholder="Title"></input></li>
          <li><input placeholder="Img URL"></input></li>
          <li><input placeholder="Description"></input></li>
        </ul>
        <button className="submit">Submit</button>
      </div>

      {/* Images */}
      <div>
        <ul>
          <li><img src="" alt="" /></li>
          <li><img src="" alt="" /></li>
          <li><img src="" alt="" /></li>
        </ul>
      </div>

    </div>
  );
}

export default App;
