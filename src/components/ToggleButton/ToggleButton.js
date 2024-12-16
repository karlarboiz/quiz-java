import React, {useState } from 'react';
import toggle from './ToggleButton.module.css';
import { toggleSwitchHandler } from '../../store/toggle-action';
import { useDispatch } from 'react-redux';

function ToggleButton() {
  const [isToggled, setIsToggled] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsToggled(val=>val ? false: true);
    
    dispatch(toggleSwitchHandler(!isToggled));
    
  };


  return (
    <label className={toggle["toggle-container"]}>
      <input 
        type="checkbox" 
        className={toggle["input" ]}
        checked={isToggled} 
        onChange={handleToggle} 
      />
      <span className={toggle["slider"]}></span>
    </label>
  );
}

export default ToggleButton;
