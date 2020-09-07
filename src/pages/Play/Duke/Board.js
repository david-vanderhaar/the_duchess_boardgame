import React from 'react';
import Grid from '../../../components/Grid';

const Board = (props) => {
  console.log(props);
  
  return (
    <div style={{height: 600, width: 600}}>
      <Grid 
        height={props.G.boardHeight} 
        width={props.G.boardWidth} 
        renderGridSpace={(x, y) => <div>{`${x}, ${y}`}</div>}
      />
    </div>
  )
};

export default Board;