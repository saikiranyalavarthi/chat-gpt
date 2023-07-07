import React, { useState } from 'react';

const ToggleButton = ({ onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
    onToggle(!isOn);
  };

  return (
    <button className={`toggle-button ${isOn ? 'active' : ''}`} onClick={handleToggle}>
      {isOn ? 'On' : 'Off'}
    </button>
  );
};

export default ToggleButton;
