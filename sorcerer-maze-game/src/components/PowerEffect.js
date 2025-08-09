import React, { useEffect } from 'react';
import './PowerEffect.css';

const PowerEffect = ({ type, message, onFinish, duration = 2000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [onFinish, duration]);

  return (
    <div className={`power-effect ${type}`}>
      <div className="power-effect-content">
        <div className="power-effect-icon">
          {type === 'good' && '✨'}
          {type === 'bad' && '💀'}
          {type === 'trap' && '⚡'}
          {type === 'scroll' && '📜'}
        </div>
        <div className="power-effect-message">{message}</div>
      </div>
    </div>
  );
};

export default PowerEffect;
