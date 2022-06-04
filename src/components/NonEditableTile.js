import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import BasicGrid from './Grid';
import GridSquare from './GridSquare';
import Tile from './Tile';

const useStyles = makeStyles((theme) => ({
  gridSquare: {
    border: 'solid',
    borderWidth: 1,
    bordercolor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    transition: '0.4s',
    height: '100%',
    width: '100%',
  },
  red: {backgroundColor: 'red'}
}));

const NonEditableTile = ({onFlip, tile, currentSide}) => {
  const classes = useStyles();
  const activeMoves = tile.sides[currentSide].moves;

  return (
    <Tile
      onFlip={onFlip}
      tileData={tile}
      currentSide={currentSide}
      renderGrid={() => {
        return (
          <BasicGrid
            height={tile.height}
            width={tile.width}
            renderGridSpace={(x, y, theme) => {
              const movesAtXY = activeMoves.filter((move) => move.x === x && move.y === y);
              const type = movesAtXY.length ? movesAtXY[0].type : null
              return <GridSquare key={`${x}${y}`} type={type} gridSquareClass={classes.gridSquare}/>
            }}
          />
        )
      }}
    />
  )
  }

export default NonEditableTile;