import React, { useState } from 'react';
import Switch from 'react-switch';
import './dark-mode.scss';

export default function useDarkMode() {
  const [isDarkMode, updateDarkModeState] = useState(false);

  return {
    isDarkMode,
    DarkModeController: () => (
      <div className="dark-mode-controller">
        <span className="dark-mode-controller__label">Dark Mode</span>
        <Switch
          onChange={val => updateDarkModeState(val)}
          checked={isDarkMode}
          onColor="#1da1f2"
          checkedIcon={<div />}
          uncheckedIcon={<div />}
          width={45}
          height={22}
          handleDiameter={12}
        />
      </div>
    )
  };
}
