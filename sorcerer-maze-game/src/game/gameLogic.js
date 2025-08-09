// Game state management and core logic
import { MAZE, CELL_TYPES, FORTUNES } from './constants';

export function getInitialState() {
  let orbs = 0;
  let sorcerer = { x: 1, y: 1 };
  
  MAZE.forEach((row, y) =>
    row.forEach((cell, x) => {
      if (cell === CELL_TYPES.ORB) orbs++;
      if (cell === CELL_TYPES.START) sorcerer = { x, y };
    })
  );
  
  return {
    maze: MAZE.map(row => [...row]),
    sorcerer,
    health: 100,
    orbsLeft: orbs,
    fortune: "",
    gameOver: false,
    win: false,
    effect: null,
  };
}

export function handleCellInteraction(cell, state) {
  let health = state.health;
  let orbsLeft = state.orbsLeft;
  let fortune = "";
  let effect = null;
  let gameOver = false;
  let win = false;

  switch(cell) {
    case CELL_TYPES.ORB:
      orbsLeft--;
      if (orbsLeft === 0) win = true;
      break;
    case CELL_TYPES.RED_COOKIE:
      effect = "bad";
      health -= 30;
      if (health <= 0) {
        health = 0;
        gameOver = true;
      }
      break;
    case CELL_TYPES.GREEN_COOKIE:
      effect = "good";
      health = Math.min(health + 30, 100);
      break;
    case CELL_TYPES.PINK_COOKIE:
      effect = "fortune";
      fortune = FORTUNES[Math.floor(Math.random() * FORTUNES.length)];
      break;
    case CELL_TYPES.TRAP:
      health -= 20;
      effect = "trap";
      if (health <= 0) {
        health = 0;
        gameOver = true;
      }
      break;
    default:
      break;
  }

  return { health, orbsLeft, fortune, effect, gameOver, win };
}
