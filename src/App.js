import React from 'react';
import './App.css';

// importing component
import Clock from './clock'

function App() {
  return (
    <div className="App">
      <div>
        Default: <Clock />
      </div>
      <div>
        Using props to change text color: <Clock txtColor="#006600" />
      </div>      
    </div>
  );
}

export default App;
