import React from 'react';
import ChatComponent from './ChatComponent';
import ToggleButton from './ToggleButton';
import './App.css'
const App = () => {
  const handleToggle = isOn => {
    console.log(`Toggle state: ${isOn}`);
  };

  return (
    <div className="app">
      <center>
      <h1>Chat App</h1>
      <ToggleButton onToggle={handleToggle} /><br /><br />
      <ChatComponent />
      </center></div>
  );
};

export default App;
