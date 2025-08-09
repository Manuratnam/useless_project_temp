import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGameOver = (finalScore) => {
    setGameOver(true);
    console.log(`Game Over! Final Score: ${finalScore}`);
  };

  const handleScoreUpdate = (newScore) => {
    setCurrentScore(newScore);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sorcerer's Memory Quest</h1>
        {!gameOver && <div className="current-score">Score: {currentScore}</div>}
      </header>
      <GameBoard 
        level={0}
        onGameOver={handleGameOver}
        onScoreUpdate={handleScoreUpdate}
      />
    </div>
  );
}

export default App;
