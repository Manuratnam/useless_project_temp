import React from 'react';
import './HealthBar.css';

export default function HealthBar({ health, effect }) {
  return (
    <div className="health-bar">
      <div 
        className={`health-bar-fill ${effect}`}
        style={{ width: `${health}%` }}
      />
      <span className="health-bar-text">{health}</span>
    </div>
  );
}
