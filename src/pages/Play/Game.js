import { Client } from 'boardgame.io/react';
import { TicTacToe } from './TicTacToe/TicTacToe';
import TicTacToeBoard from './TicTacToe/Board';
import { Duke } from './Duke/Duke';
import DukeBoard from './Duke/Board';

// const Game = Client({ 
//   game: TicTacToe ,
//   board: TicTacToeBoard, 
// });

const Game = Client({ 
  game: Duke,
  board: DukeBoard, 
});

export default Game;