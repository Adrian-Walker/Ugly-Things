import React, { useState } from 'react';
import './style.css';

function App() {
  const [thing, setthing] = useState(initialState)
  return (
    // Main App
    <div className="app">
      {/* inputs */}
      <div className="inputs">
        <ul>
          <li className="item"><input placeholder="Title"></input></li>
          <li className="item"><input placeholder="Img URL"></input></li>
          <li className="item"><input placeholder="Description"></input></li>
        </ul>
        <div className='buttonDiv'>
          <button className="submit">Submit</button>

        </div>
      </div>

      {/* Images */}
      <div className="images">
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
