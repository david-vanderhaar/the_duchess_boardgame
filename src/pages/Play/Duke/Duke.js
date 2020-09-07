const boardHeight = 6;
const boardWidth = 6; 

export const Duke = {
  name: 'duke',

  setup: () => ({ 
    boardHeight,
    boardWidth,
    cells: Array(boardHeight).fill(null).map((itemY, y) => Array(boardWidth).fill(null).map((itemX, x) => null)),
  }),

  turn: {
    moveLimit: 1,
  },

  moves: {
    A: (G, ctx) => { },
  },
};