import React, { useState } from 'react';
import './ToggleButton.module.css';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <label className="toggle-container">
      <input 
        type="checkbox" 
        className="input" 
        checked={isToggled} 
        onChange={handleToggle} 
      />
      <span className="slider"></span>
    </label>
  );
}

export default ToggleButton;
